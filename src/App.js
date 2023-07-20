import logo from './logo.svg';
import './App.css';


const centerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

function Name() {
  console.log('Hello from a Child Component')
  return <h1 style={{ background: 'pink', width: '100%', textAlign: 'center', color: 'white' }}> Hello It's me Nada from a Child Component </h1>;
}

function DisplayImg() {
  return <div style={(centerStyle)}>
    <img className="imageCenter" src='https://w0.peakpx.com/wallpaper/123/342/HD-wallpaper-cute-duck-pond-duck-baby-animal.jpg'></img>
  </div>
}

let count = 0;

function Counter() {
  return (console.log(count++ + ' Number of clicks'));
}


function App() {
  return (
    <div style={{ backgroundColor: 'orange', width: '100vw', minHeight: '100vh' }}>
      <br></br>
      <div>
        {console.log('Hello from a parent Component')}
        <h1 style={{ background: 'yellow', width: '100%', textAlign: 'center', color: 'fuchsia' }}>Hello It's me Nada from a Parent Component </h1>
        <img className="imageCenter" src='https://w0.peakpx.com/wallpaper/123/342/HD-wallpaper-cute-duck-pond-duck-baby-animal.jpg'></img>
      </div>

      <Name />
      <DisplayImg />

      <br></br>
      <div style={(centerStyle)}>
        <button onClick={Counter} className="btn">
          Click Me!
        </button>
      </div>    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
