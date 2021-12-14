import React from 'react';
import { useSelector } from 'react-redux';

export default function MyProfile() {
  const rocketsName = useSelector((state) => state.rockets);
  const reservedRockets = rocketsName.filter((rocket) => rocket.reserved);
  return (
    <div className="profile-c">
      <div className="my-mission">
        <h2>My Missions</h2>
      </div>
      <div className="my-rockets">
        <h2>My Rockets</h2>
        <ul className="rocket-profile">
          {reservedRockets.map((rocket) => (
            <li className="rocket-name" key={rocket.id}>{rocket.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
