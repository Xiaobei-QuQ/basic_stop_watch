import {connect} from 'react-redux';
import CounterView from './CounterView'
import { increment } from '../../actions/counter.js';

const mapStateToProps = (state) => {
  console.log(state)
  return {
    count: state.counter.count
  };
}

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(increment())
});

const Counter = connect(mapStateToProps, mapDispatchToProps)(CounterView);

export default Counter