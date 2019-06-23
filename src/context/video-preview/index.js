import React, { Component } from 'react';

const _state = {
  isShown: false,
  title: '',
  source: '',
};

const VideoPreviewContext = React.createContext(_state);

const VideoPreviewConsumer = VideoPreviewContext.Consumer;

class VideoPreviewProvider extends Component {

  state = _state;

  openModal = (title, source) => {
    this.setState({
      ...this.state,
      title,
      source,
      isShown: true,
    })
  }

  hideModal = () => {
    this.setState({
      ...this.state,
      isShown: false,
    })
  }

  render() {
    return (
      <VideoPreviewContext.Provider value={{
        ...this.state,
        openModal: this.openModal,
        hideModal: this.hideModal,
      }}>
        {this.props.children}
      </VideoPreviewContext.Provider>
    );
  }
}

export {
  VideoPreviewConsumer,
  VideoPreviewProvider,
}
