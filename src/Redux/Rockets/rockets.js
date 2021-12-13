import spaceXAPI from '../../Components/RocketApi';

const GET_ROCKETS = 'spaceX/rockets/GET_ROCKETS';

const initialState = [];
// Reducers
const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};

// Action
const getRocketAction = (payload) => ({
  type: GET_ROCKETS,
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
