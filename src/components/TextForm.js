import React,{ useState } from 'react';

export default function TextForm(props) {
    const handleOnChange = (event)=>{
        setText(event.target.value);
        
    }

    const handleUpClick = ()=>{
        let newTextUp=text.toUpperCase();
        setText(newTextUp);
        props.showAlert("Coverted to uppercase","success");
        
    }

    const handleLoClick = ()=>{
        let newTextLo=text.toLowerCase();
        setText(newTextLo);
        props.showAlert("Coverted to LowerCase","success");
        
    }
    const handleCTClick = ()=>{
        let newTextLo="";
        setText(newTextLo);
        props.showAlert("Coverted to Clear Text","success");
    }
    const handleCopy = ()=>{
        let copyText =document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Copy text","success");
    }
    const handleExtraSpaces = ()=>{
        let spacesText = text.split(/[ ]+/);
        setText(spacesText.join(" "));
        props.showAlert("Remove Extra Spaces","success");
    }
    const [text,setText] = useState(""); 
    return (  
       <>
            <div className="container" style={{color:props.mode === `light`?`#0f0640`:`white`}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === `light`?`white`:`grey`,color:props.mode === `light`?`#0f0640`:`white`}} id="myBox" rows="10"></textarea>
                </div>
                <button className={`btn btn-outline-${props.mode !== `light`?`light`:`primary`} mx-1 my-2`} onClick={handleUpClick}>Convert to Uppercase</button>
                <button className={`btn btn-outline-${props.mode !== `light`?`light`:`primary`} mx-1 my-2` } onClick={handleLoClick}>Convert to LowerCase</button>
                <button className={`btn btn-outline-${props.mode !== `light`?`light`:`primary`} mx-1 my-2`} onClick={handleCTClick}>Clear Text</button>
                <button className={`btn btn-outline-${props.mode !== `light`?`light`:`primary`} mx-1 my-2`} onClick={handleCopy}>Copy Text</button>
                <button className={`btn btn-outline-${props.mode !== `light`?`light`:`primary`} mx-1 my-2`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
       
            </div>
            <div className="containe my-3" style={{color:props.mode === `light`?`#0f0640`:`white`}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length - 1} words and {text.length} characters</p>
                <p>{text.split(" ").length * 0.008 - 0.008} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}