import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../Redux/Rockets/rockets';

export default function Rocket() {
  const dispatch = useDispatch();
  const rocketNum = useSelector((state) => state.rockets);
  useEffect(() => {
    if (rocketNum.length === 0) {
      dispatch(getRockets());
    }
  }, []);

  return (
    <div className="rocket-c">
      {rocketNum.map((rocket) => (
        <ul key={rocket.id} className="rocket-list">
          <li>
            <img className="rocket-img" src={rocket.flickr_images} alt="rocket" />
          </li>
          <div className="rocket-info">
            <li><h3>{rocket.name}</h3></li>
            <p className="rocket-des">
              {rocket.reserved && (<span>Reserved</span>)}
              {rocket.description}
            </p>
            <button className="reserve-btn" type="button">Reserve Rocket</button>
          </div>
        </ul>
      ))}
    </div>
  );
}
