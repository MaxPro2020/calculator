import { connect } from 'react-redux';
import Results from '../components/Results';

const mapStateToProps = (state) => ({
  result: state.result,
});

export default connect(mapStateToProps, null)(Results);
