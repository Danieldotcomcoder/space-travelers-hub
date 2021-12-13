import React, { useEffect, useState } from 'react';
import {
  useSelector, useDispatch,
} from 'react-redux';
import { getMissions } from '../Redux/missions/Mission';
import Mission from './Mission';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const [, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      setLoading(true);
      dispatch(getMissions());
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <td>Mission</td>
          <td>Description</td>
          <td>Status</td>
        </tr>
      </thead>
      <tbody>
        { missions.map((mission) => (<Mission key={mission.id} missionInfo={mission} />))}
      </tbody>
    </table>
  );
};

export default Missions;
