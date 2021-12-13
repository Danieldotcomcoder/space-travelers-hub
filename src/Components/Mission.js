import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { JoinMission } from '../Redux/missions/Mission';

const Missions = (props) => {
  const { missionInfo } = props;
  const dispatch = useDispatch();

  const Join = () => {
    dispatch(JoinMission(missionInfo.id));
  };

  return (
    <tr>
      <td><h3>{missionInfo.name}</h3></td>
      <td><p>{missionInfo.description}</p></td>
      <td>
        {
          (missionInfo.joined)
            ? <button type="button" onClick={Join}> Leave Mission </button>
            : <button type="button" onClick={Join}> Join Mission </button>
        }
      </td>
    </tr>
  );
};

Missions.propTypes = {
  missionInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    joined: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Missions;
