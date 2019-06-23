import React from 'react';
import _ from 'lodash';
import Card from 'views/components/card';
import { EditorConsumer } from 'context/editor';

import './styles.scss';

const SearchCard = ({
  info
}) => {
  return (
    <EditorConsumer>
      {({
        openModal,
      }) => (
        <Card info={info}>
          <div className="action-wrapper">
            <button className="btn btn-outline btn-block btn-add"
              onClick={(e) => {
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
                  .then(info => openModal(info))
              }}
            >Add to NASA Collection</button>
          </div>
        </Card>
      )}
    </EditorConsumer>
  );
};

export default SearchCard;
