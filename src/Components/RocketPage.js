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
    <div>
      {rocketNum.map((rocket) => (
        <ul key={rocket.id}>
          <li>
            <img alt="rocket" src={rocket.flickr_images} />
          </li>
          <div>
            <li>{rocket.name}</li>
            <p>
              {rocket.reserved && (<span>Reserved</span>)}
              {rocket.description}
            </p>
            <button type="button">Reserve</button>
          </div>
        </ul>
      ))}
    </div>
  );
}
