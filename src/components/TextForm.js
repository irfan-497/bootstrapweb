import React,{useState} from 'react'

function TextForm(props) {
    const [text,setText] = useState('Enter text here');
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event)=>{
        console.log("on Change");
        setText(event.target.value)
    }
  return (
    <>
   <div className='container my-3'>
    <h1>{props.heading}</h1>
   <div className="mb-3">
  <textarea className="form-control"value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className='btn btn-primary' onClick={handleUpClick}>Convert upto Uppercase</button>
   </div>
    </>
  )
}

export default TextForm;