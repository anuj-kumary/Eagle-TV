import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, useData } from '../../../contexts';
import { addToHistory } from '../../../utils/historyUtils';
import './VideoCard.css';

export const VideoCard = ({ item }) => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { dispatch } = useData();
  const { _id, img, title, creator, date } = item;

  const singleVideoPage = () => {
    navigate(`/singlevideo/${_id}`);
    token && addToHistory(item, token, dispatch);
  };

  return (
    <>
      <div className='card'>
        <div className='card__imgs' onClick={() => singleVideoPage()}>
          <img className='img-res' src={img} alt='banner' />
        </div>

        <header className='card__heading'>{title}</header>
        <div>
          <i className='icon fas fa-ellipsis-v'></i>
        </div>
        <p className='card__author'>
          {creator} <span className='card__date'>{date}</span>
        </p>
      </div>
    </>
  );
};
