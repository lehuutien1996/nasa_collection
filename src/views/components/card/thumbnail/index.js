import React from 'react';
import _ from 'lodash';
import { VideoPreviewConsumer } from 'context/video-preview';
import './styles.scss';

const Thumbnail = ({
  info,
}) => {
  return (
    <VideoPreviewConsumer>
      {({
        openModal,
      }) => (
        <button className="card__thumbnail"
          onClick={e => {
            fetch(info.href)
              .then(response => response.json())
              .then(data => {
                const video = _.find(data, item => {
                  return _.endsWith(item, '.mp4');
                })

                return {
                  ...info,
                  videoFileUrl: video,
                }
              })
              .then(info => openModal(info.title, info.videoFileUrl))
          }}
        >
          <div className="image-wrapper">
            <img src={info.imagePreviewUrl} alt=""/>
          </div>
        </button>
      )}
    </VideoPreviewConsumer>
  );
};

export default Thumbnail;
