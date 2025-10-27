import React, {createElement} from 'react';
import './App.css';

function App() {
/*
  //JSX Version of App Component
  // return (
  //   <div>
  //     React with Redux Training
  //   </div>
  // );
*/
// return React.createElement('div', null, "**React with Redux Training**");
// return React.createElement('div', null, "<h2>**React with Redux Training**</h2>");
// return React.createElement('div', null, "<h2>", "**React with Redux Training**");
// return React.createElement('div', null, <h2>"**React with Redux Training**"</h2>);
// return React.createElement('div', {id: "header", className: "headClass"}, React.createElement('h2', {}, "**React with Redux Training**"));
// return React.createElement('div', {id: 'header', className: 'headClass'}, React.createElement('h2', {style: {color: 'blue', textShadow: '0 0 10px black'}}, "**React with Redux Training**"));
// return React.createElement('div', {style: {width: '600px', textAlign: 'center', borderRadius: '10px', boxShadow: '0 0 10px black', padding: '10px', margin: 'auto'}},
//           React.createElement('h2', {}, 'Shaik Solutions Private Limited'),
//           React.createElement('img', {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy9MV_G-_OO6HiCJisrMctVAyTpbnnkD3vEg&s', width: '200px', alt: 'Google for VizaG', style:{borderRadius: '25px'}}),
//           React.createElement('h3', {}, 'React with Redux Training'));

return createElement('div', {style: {width: '600px', textAlign: 'center', borderRadius: '10px', boxShadow: '0 0 10px black', padding: '10px', margin: 'auto'}},
          createElement('h2', {}, 'Shaik Solutions Private Limited'),
          createElement('img', {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy9MV_G-_OO6HiCJisrMctVAyTpbnnkD3vEg&s', width: '200px', alt: 'Google for VizaG', style:{borderRadius: '25px'}}),
          createElement('h3', {}, 'React with Redux Training'));          
}

export default App;
