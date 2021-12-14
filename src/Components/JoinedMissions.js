import React from 'react';
import { useSelector } from 'react-redux';

const JoinedMissions = () => {
  const myMissions = useSelector((state) => state.missions.filter((mission) => mission.joined));
  return (
    <div className="myMissionsContainer">
      <ul>
        {
          myMissions.map((mission) => (
            <li key={mission.id}>
              <h3>{mission.name}</h3>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default JoinedMissions;
