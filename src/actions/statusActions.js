// Const
export const statusConst = {
  PENDING: 'STATUS_PENDING',
  SUCCESS: 'STATUS_SUCCESS',
  FAILURE: 'STATUS_FAILURE',
};

// Public
export const statusActions = { initSuccess, initFailure };

// ActionCreators
function initSuccess() {
  return { type: statusConst.SUCCESS };
}

function initFailure({ message }) {
  return { type: statusConst.FAILURE, message };
}
