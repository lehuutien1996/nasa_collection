import React, { Component } from 'react';

const _state = {
  isShown: false,
  isEditing: false,
  info: {
    title: '',
    description: '',
    imagePreviewUrl: '',
    videoFileUrl: '',
  },
};

const EditorContext = React.createContext(_state);

const EditorConsumer = EditorContext.Consumer;

class EditorProvider extends Component {
  state = _state;

  openModal = (info) => {
    this.setState({
      ...this.state,
      isShown: true,
      info,
    })
  }

  hideModal = () => {
    this.setState({
      ...this.state,
      isShown: false,
    })
  }

  setFieldValue = (field, value) => {
    this.setState({
      ...this.state,
      info: {
        ...this.state.info,
        [field]: value,
      },
    });
  }

  render () {
    return (
      <EditorContext.Provider value={{
        ...this.state,
        openModal: this.openModal,
        hideModal: this.hideModal,
      }}>
        {this.props.children}
      </EditorContext.Provider>
    )
  }
}

export {
  EditorProvider,
  EditorConsumer,
}
