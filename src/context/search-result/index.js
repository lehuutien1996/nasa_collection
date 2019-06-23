import React, { Component } from 'react';
import NasaService from 'http-services/nasa.service';

const _state = {
  inputSearch: '',
  result: {
    collection: {
      items: [],
    }
  },
};

const SearchResultContext = React.createContext(_state);

const SearchResultConsumer = SearchResultContext.Consumer;

class SearchResultProvider extends Component {

  state = _state;

  setInputSearch = (search) => {
    this.setState({
      ...this.state,
      inputSearch: search,
    })
  }

  searchFromNasa = async (q) => {
    const service = new NasaService();

    const { data } = await service.search(q);

    this.setState({
      ...this.state,
      result: this.parseResults(data),
    });
  }

  parseResults = (result) => {
    const items = result.collection.items;

    result.collection.items = items.map(item => {

      const [preview] = item.links;

      return {
        title: item.data[0].title,
        description: item.data[0].description,
        imagePreviewUrl: preview.href,
        meta: {
          keywords: item.data[0].keywords,
          date_created: item.data[0].date_created,
        },
        ...item,
      };
    });

    return result;
  };

  render () {
    return (
      <SearchResultContext.Provider value={{
        ...this.state,
        setInputSearch: this.setInputSearch,
        searchFromNasa: this.searchFromNasa,
      }}>
        {this.props.children}
      </SearchResultContext.Provider>
    );
  }
}

export {
  SearchResultProvider,
  SearchResultConsumer,
};
