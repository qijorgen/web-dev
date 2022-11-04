import logo from './logo.svg';
import ForLoop from './Component/ForLoop'

import './App.css';
import './App.scss';
//scss/sass: super set of css
//what's npm: node package management
//what's node: server side javascript
//what's nvm: node version management
//what's git, branch, remote? commit?
function App() {
  
  let array = [1,2,3,4,5,6,7,8,9]

  function foreachLoop(array) {
          
    const foreachArray = []
    array.forEach((ele) => {
      foreachArray.push(<div className="loop-item">{ele}</div>)
    })
    return <div className="loop-list">{foreachArray}</div>
  }

  return (
    <div className="App">
      <div className="for-loop">
        for loop here:
        react knows it's an expression, it will start evaluate the content within the bracket {}
        { ForLoop(array) }
      </div>
      <div className="map-loop">
        map loop here:
        <div className="loop-list">
        {
          array.map((ele,idx) => {
            return <div key={idx} className="loop-item">{ele}</div>
          })
        }
        </div>
      </div>
      <div className="foreach-loop">
        foreach loop here:
      {
        //todo: use foreach
        //... decontruction, 
        ForLoop([...array, 37, 12, 480])
      }
      </div>
    </div>
  );
}

export default App;
