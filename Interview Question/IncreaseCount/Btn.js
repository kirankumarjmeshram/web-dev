const Btn = (props)=>{
    const {onClick} = props;
    return <>
        <button onClick={()=>onClick()}>Button</button>
    </>
    
  
  }
  const Lbl = (props) =>{
    const {count} = props;
    return <h1>{count}</h1>
  }
  
  module.exports = {Btn, Lbl};