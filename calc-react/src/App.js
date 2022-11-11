import LoopListContainer from './Container/LoopListContainer'
import Employee from './Component/Employee'
import React from 'react'
import axios from 'axios'

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
    const [stringData, setStringData] = React.useState("default String")
    const [numberData, setNumberData] = React.useState(1)
    //list of users, on every api call, push a new user into the list, then render it
    const [userList, setUserList] = React.useState([])

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

    //we will use get method, and use axios lib to help us make the api call
    //
    React.useEffect(() => {
        console.log(numberData)
        axios.get('https://jsonplaceholder.typicode.com/todos/' + numberData)//you don't get the api response result im
            //but here, you can register a callback waiting
            //whenever the result comes back, this CB will be invoked as a func
            .then((resp) => {
                console.log(resp.data);
                //!!! userList.push(resp.data)
                // ... spread/deconstruction
                setUserList([...userList, resp.data])
            });
    }, [numberData])

    


    //use the setter method, inside of useEffect. to generate random data, and render them.

    //employee data are being held in app(the parent component): state
    //employee data are passed down to child component as: props
    return (
        <div className="App">
            <div>
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
            
            <hr/>

            <div>
                {numberData}
                <button onClick={() => {
                    setNumberData(numberData + 1)
                }}>update Number Data</button>
            </div>
        </div>
    );
}

export default App;
