import { statusConst } from '../actions/statusActions';

const initialState = {
  isPending: true,
  message: 'Loading',
};

export const statusReducer = (state = initialState, { type, message }) => {
  switch (type) {
    case statusConst.FAILURE:
      return { message };
    case statusConst.SUCCESS:
      return {};
    default:
      return state;
  }
};
