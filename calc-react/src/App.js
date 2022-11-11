import LoopListContainer from './Container/LoopListContainer'
import Employee from './Component/Employee'
import React from 'react'
import './App.css';
import './App.scss';
//scss/sass: super set of css
//what's npm: node package management
//what's node: server side javascript
//what's nvm: node version management
//what's git, branch, remote? commit?

//------
//whats props vs states
//learn react hook: useState && useEffect
//write a new component called: Employee, fn ln age rank
//display them in profile card design

//------
//fetch, youtube, how to use it
//api, callback, promise, ajax call
// what's scss, why scss

//------
//todo list task.
//

//class component - couple yrs back. --> react component life cycle
//functional component
//diff? why functional is better.
function App() {
    const [empList, setEmpList] = React.useState([])
    const [stringData, setStringData] = React.useState("")
    const [numberData, setNumberData] = React.useState(99)

    //the first param
    //the second param: 
    React.useEffect(() => {
        setEmpList([{
            fn: Math.random().toString(36).slice(2, 7),
            ln: Math.random().toString(36).slice(2, 7),
            age: Math.floor(Math.random()*100),
            rank: Math.random().toString(36).slice(2, 7),
            flag: true
        }])
    }, [])

    React.useEffect(() => {
        console.log(`...${stringData} has changed...`);
    }, [stringData])

    //use the setter method, inside of useEffect. to generate random data, and render them.

    //employee data are being held in app(the parent component): state
    //employee data are passed down to child component as: props
    return (
        <div className="App">
            stringData: { stringData}
            {
                empList.map((anEmp, idx) => {
                    
                    return <Employee info={anEmp} key={idx} />
                }) 
            }
            <button onClick={() => {
                setStringData(stringData + " _");
            }}>update String Data</button>
        </div>
    );
}

export default App;
