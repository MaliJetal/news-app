import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUsersRequest} from './actions/users';

class App extends Component {
  constructor(props){
    super(props);
    this.props.getUsersRequest();
  }
  render(){
    return (
      <div className="App">
        Test

      </div>
    );
  }
}

// function App(props) {
//   useEffect(()=> {
//     props.getUsersRequest();
//   }, [])
//   return (
//     <div className="App">
//       Test

//     </div>
//   );
// }

export default connect(null, {getUsersRequest})(App);
