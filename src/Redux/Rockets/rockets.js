import spaceXAPI from '../../Components/RocketApi';

const GET_ROCKETS = 'spaceX/rockets/GET_ROCKETS';
const RESERVE_ROCKETS = 'spaceX/rockets/RESERVE_ROCKET';
const CANCEL_RESERVATION = 'spaceX/rockets/CANCEL_RESERVATION';

const initialState = [];
// Reducers
const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
    case RESERVE_ROCKETS: {
      const newState = state.map((rocket) => (rocket.id !== action.payload
        ? rocket : { ...rocket, reserved: true }));
      return newState;
    }
    case CANCEL_RESERVATION: {
      const newState = state.map((rocket) => (rocket.id !== action.payload
        ? rocket
        : { ...rocket, reserved: false }));
      return newState;
    }
    default:
      return state;
  }
};

// Action
const getRocketAction = (payload) => ({
  type: GET_ROCKETS,
  payload,
});

export const reserveRockets = (payload) => ({
  type: RESERVE_ROCKETS,
  payload,
});

export const cancelReservation = (payload) => ({
  type: CANCEL_RESERVATION,
  payload,
});

export const getRockets = () => (dispatch) => {
  spaceXAPI.getRockets().then((res) => {
    dispatch(getRocketAction(
      res.map((rocket) => ({
        id: rocket.id,
        name: rocket.rocket_name,
        description: rocket.description,
        flickr_images: rocket.flickr_images[0],
      })),
    ));
  });
};

export default rocketReducer;
