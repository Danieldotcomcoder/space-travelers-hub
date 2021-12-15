import dragonsAPI from "../../Components/GetDragons";

const GET_DRAGONS = "spaceX/rockets/GET_DRAGONS";
const RESERVE_DRAGONS = "spaceX/rockets/RESERVE_DRAGONS";
const CANCEL_DRAGONS_RESERVE = "spaceX/rockets/CANCEL_DRAGONS";
const initialState = [];

const dragonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRAGONS:
      return action.payload;
    case RESERVE_DRAGONS: {
      const updateState = state.map((dragon) =>
        dragon.id !== action.payload ? dragon : { ...dragon, reserved: true }
      );
      return updateState;
    }
    case CANCEL_DRAGONS_RESERVE: {
      const updateState = state.map((dragon) =>
        dragon.id !== action.id ? dragon : { ...dragon, reserved: false }
      );

      return updateState;
    }
  }
};

export const getDragons = () => (dispatch) => {
  dragonsAPI.getDragons().then((res) => {
    dispatch(getDragonAction(
      res.map((dragon) => ({
        id: dragon.id,
        name: dragon.name,
        type: dragon.type,
        flickr_images: rocket.flickr_images[0],
      })),
    ));
  });
};

export const reserveDragons = (payload) => ({
  type: RESERVE_DRAGONS,
  payload,
});

export const cancelDragons = (payload) => ({
  type: CANCEL_DRAGONS_RESERVE,
  payload,
});

export default rocketReducer;