import { connect } from 'react-redux';
import SplashHero from './splash_hero';
import { createTask } from '../../actions/task_actions';

const mapDispatchToProps = dispatch => ({
  createTask: task => dispatch(createTask(task))
})

export default connect(
  null,
  mapDispatchToProps
)(SplashHero);