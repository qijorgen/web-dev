function forLoop(array) {
    const forarray = [];
    for (let i=0; i< array.length; i++) {
      forarray.push(<div className="loop-item">{array[i]}</div>) 
    }
    return <div className="loop-list">{forarray}</div>
}

export default forLoop;
