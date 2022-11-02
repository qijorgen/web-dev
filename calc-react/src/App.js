import logo from './logo.svg';
import './App.css';
//scss
//what's npm
//what node
//what's nvm
//what's git, branch, remote? commit?
function App() {
  
  let array = [1,2,3,4,5,6,7,8,9]
  
  function forLoop(array) {
    const forarray = [];
     for (let i=0; i< array.length; i++) {
      forarray.push(<div>{array[i]}</div>) 
    }
    return <div>{forarray}</div>
  }
  function foreachLoop(array) {
          
    const foreachArray = []
    array.forEach((ele) => {
      foreachArray.push(<div>{ele}</div>)
    })
    return <div>{foreachArray}</div>
  }
  return (
    <div className="App">
      <div>
        for loop here:
        {
          forLoop(array)
        }
      </div>
      <div>
        map loop here:
      {
         array.map((ele,idx) => {
          return <div key={idx}>{ele}</div>
        })
      }
      </div>
      <div>
        foreach loop here:
      {
        //todo: use foreach
        foreachLoop(array)
      }
      </div>
    </div>
  );
}

export default App;
