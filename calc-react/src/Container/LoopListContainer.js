import ForLoop from '../Component/ForLoop'


const LoopListContainer = (props) => {
    if(props.switch) {
        return <div>
            <div className="for-loop">
                for loop here:
                react knows it's an expression, it will start evaluate the content within the bracket {}
                { ForLoop(props.array) }
            </div>
            <div className="foreach-loop">
                foreach loop here:
            {
                //todo: use foreach
                //... decontruction, 
                ForLoop([...props.array, 37, 12, 480])
            }
            </div>
        </div>
    } else {
        return null
    }
}


export default LoopListContainer