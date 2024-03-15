import React from 'react';
import { useState } from 'react';

export default function App() {
  const [isLightOn, setLight] = useState(true);

  function handleClick() {
    setLight(!isLightOn);
  }

  return (
    <>
      <button type="button" onClick={handleClick}>
        {isLightOn ? 'AAN' : 'UIT'}
      </button>
    </>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLightOn: true
//     };

//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState({
//       isLightOn: !this.state.isLightOn,
//     });
//   }

//   render() {
//     return (
//       <button
//         type="button"
//         onClick={this.handleClick}
//       >
//         {this.state.isLightOn ? 'AAN' : 'UIT'}
//       </button>
//     );
//   }
// }

// export default App;
