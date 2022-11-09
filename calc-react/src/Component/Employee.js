//<li>Joe, Male, 36, Manager</li>
const Employee = (props) => {
    if (props.info.flag) {
        return <div>
        <div className="employee">
            <div className="name">
                {props.info.fn} {props.info.ln}
            </div>
            <div className="agerank">
                Age: {props.info.age} Rank: {props.info.rank}
            </div>
        </div>
    

    </div>
    } else {
        return null
    }
    
}

export default Employee