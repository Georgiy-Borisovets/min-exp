import * as PropTypes from 'prop-types';


export const historyShape = PropTypes.shape(
  {
    replace: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
  },
);

export default {
  historyShape,
};
