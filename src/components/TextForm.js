import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
       // console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);    
        props.showAlert("converted to upper","success");
    }
    const handleLoClick = () =>{
         let newText=text.toLowerCase();
         setText(newText);    
         props.showAlert("converted to lower","success");
     }
    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
        
    }
    const handleClearClick=()=>{
        let newText='';
        setText(newText)
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.ariaSelected();
        navigator.clipboard.writeText(text.value);
    }
    const [text,setText]=useState('');
  return (
    <>  
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
      
      <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}> Convert to UpperCase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}> Convert to UpperCase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008* text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.lenght>0? text:"Enter something in textbox above to preview"}</p>
    </div>
    </>
  );
}
