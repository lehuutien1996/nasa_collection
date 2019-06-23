import React, { Fragment } from 'react';
import { VideoPreviewConsumer } from 'context/video-preview';
import PropTypes from 'prop-types';
import './styles.scss';

const VideoPreview = () => {
  return (
    <VideoPreviewConsumer>
      {({
        isShown,
        title,
        source,
        hideModal,
      }) => ! isShown ? <Fragment/> : (
        <div className="modal">
          <div className="modal__backdrop"></div>
          <div className="modal__content">
            <header className="modal__header">
              <span>{title}</span>
              <button className="close-btn"
                onClick={e => {
                  hideModal();
                }}
              >
                &times; Close
              </button>
            </header>
            <div className="modal__body">
              <video controls>
                <source src={source} type="video/mp4"/>
              </video>
            </div>
          </div>
        </div>
      )}
    </VideoPreviewConsumer>
  );
};

VideoPreview.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.any,
  onClose: PropTypes.func,
};

export default VideoPreview;
