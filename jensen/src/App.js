// // import React,{Component} from 'react';
// import './App.css';
// import Student from './components/Student'

// function App() {
//   return (
//     <div className="App">
//       <Student/>
//     </div>
//   );
// }

// export default App;

import Student from './components/Student'
import './App.css';

class App extends Student {
  render() {
    return(
      <Student/>
    )
  }
}

export default App;