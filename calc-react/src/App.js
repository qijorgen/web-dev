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

function App() {
    const [empList, setEmpList] = React.useState([
        /*{
            fn: "fn",
            ln: "ln",
            rank: "rank",
            age: 1,
            flag: true
        },*/
    ])

    const [arrayList, setArray] = React.useState([
        /*{
            flag: false,
            arrayData: [1,2,3],
        }*/
    ])

    //use the setter method, inside of useEffect. to generate random data, and render them.
    

    //employee data are being held in app(the parent component): state
    //employee data are passed down to child component as: props
    return (
        <div className="App">
            {
                arrayList.map((anArray, idx) => {
                    return <LoopListContainer array={anArray.arrayData} key={idx} switch={anArray.flag}/>
                })
            }
            {
                empList.map((anEmp, idx) => {
                    return <Employee info={anEmp} key={idx}/>
                }) 
            }
        </div>
    );
}

export default App;
