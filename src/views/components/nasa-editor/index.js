import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import { EditorConsumer } from 'context/editor';
import * as itemService from 'services/items.service';

import Input from 'views/components/form/input';
import TextArea from 'views/components/form/textarea';
import Select from 'views/components/form/select';

const NasaEditor = ({
  show,
  onClose,
}) => {
  const onAddClicked = (info) => {
    itemService.add(info);
  }

  return (
    <EditorConsumer>
      {({
        info,
        setFieldValue,
        isShown,
        hideModal,
      }) => ! isShown ? <Fragment/> : (
        <div className="modal">
          <div className="modal__backdrop"></div>
          <div className="modal__content">
            <div className="modal__body">
              <div className="popup">
                <div className="popup__header">
                  <span>Add To Collection</span>
                  <button className="close-btn"
                    onClick={e => {
                      hideModal();
                      if (onClose) {
                        onClose(this)
                      }
                    }}
                  >
                    &times;
                  </button>
                </div>
                <div className="popup__body">
                  <div className="form-wrapper">
                    <div className="form-group">
                      <Input
                        title="Title"
                        value={info.title}
                        onChange={e => setFieldValue('title', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <TextArea
                        title="Description"
                        value={info.description}
                        onChange={e => setFieldValue('description', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <Select
                        title="Type"
                        value="Video"
                        onChange={e => {}}
                      />
                    </div>
                    <div className="form-group">
                      <Input
                        title="Link preview image url"
                        value={info.imagePreviewUrl}
                        onChange={e => setFieldValue('imagePreviewUrl', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <Input
                        title="Link file url"
                        value={info.videoFileUrl}
                        onChange={e => setFieldValue('videoFileUrl', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <button className="btn btn-primary" onClick={e => onAddClicked(info)}>
                        Add to Collection
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </EditorConsumer>
  );
};

NasaEditor.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func
};

export default NasaEditor;
