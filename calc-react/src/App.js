import LoopListContainer from './Container/LoopListContainer'
import Employee from './Component/Employee'

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

const flag = false;
function App() {
    //employee data are being held in app(the parent component): state
    //employee data are passed down to child component as: props
    return (
        <div className="App">
            <LoopListContainer switch={flag} array={[1,2,3]}/>
            <LoopListContainer switch={flag} array={[4,5,6]}/>
            <LoopListContainer switch={flag} array={[7,8,9]}/>
            <Employee info={['Paul','Bogden', '23','CEO']}/>
            <Employee info={['Jenny','Gradver', '61','Intern']}/>
            <Employee info={['Paula', 'Newman', '45', 'Janitor']}/>
            {/*<Employee />*/}
            {/*<Employee />*/}
            {/*<Employee />*/}
        </div>
    );
}

export default App;
