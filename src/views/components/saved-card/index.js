import React from 'react';
import Card from 'views/components/card';

import HeartIcon from 'assets/images/heart.png';
import TrashIcon from 'assets/images/trash.png';
import PencilIcon from 'assets/images/pencil.png';

import './styles.scss';

const SavedCard = ({
  info,
}) => {
  return (
    <Card info={info}>
      <div className="action-wrapper multi-actions">
        <button className="btn btn-outline">
          <img src={HeartIcon} alt=""/>
        </button>
        <button className="btn btn-outline">
          <img src={TrashIcon} alt=""/>
        </button>
        <button className="btn btn-outline">
          <img src={PencilIcon} alt=""/>
        </button>
      </div>
    </Card>
  );
};

export default SavedCard;
