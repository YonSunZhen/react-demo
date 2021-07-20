import { connect } from 'react-redux';
import CountUI from '../../components/count';
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction }  from '../../redux';

function mapStateToProps(state) {
  return {count: state}
}

function mapDispatchToProps(dispatch) {
  return {
    increment: data => dispatch(createIncrementAction(data)),
    decrement: data => dispatch(createDecrementAction(data)),
    incrementAsync: (data, time) => {dispatch(createIncrementAsyncAction(data, time))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
