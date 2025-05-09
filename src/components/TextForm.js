import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpclick=()=>{
    let data = text.toUpperCase();
    setText(data); 
  }

  const handleLoclick=()=>{
    let data = text.toLowerCase();
    setText(data); 
  }

  const handleTitleCase=()=>{
    let words = text.split(' ');
    setText(words.map(word => word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()).join(' '));
  }

  const handleCopy=()=>{
    navigator.clipboard.writeText(text);
  }

  const handleRemoveSpaces=()=>{
    let words = text.split(/\s+/);
    setText(words.join(' '));
  }

  const handleclear=()=>{
    setText(''); 
  }

  const handleonchange=(event)=>{
    setText(event.target.value)
  }
  const [text, setText] = useState("");
  return (
    <>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label my-2"><h3>{props.heading}</h3></label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" value={text} onChange={handleonchange}></textarea>
        </div>
        <button className='btn btn-primary mx-2 my-1' onClick={handleUpclick}>Convert to uppercase</button>
        <button className='btn btn-primary mx-2 my-1' onClick={handleLoclick}>Convert to lowercase</button>
        <button className='btn btn-primary mx-2 my-1' onClick={handleTitleCase}>Convert to titlecase</button>
        <button className='btn btn-primary mx-2 my-1' onClick={handleCopy}>Copy text</button>
        <button className='btn btn-primary mx-2 my-1' onClick={handleRemoveSpaces}>Remove extra spaces</button>
        <button className='btn btn-primary mx-2 my-1' onClick={handleclear}>Clear</button>

        <p>Word count: {text.trim().split(/\s+/).filter((word) => word.length > 0).length}</p>

        <h5 className='my-2'>Preview</h5>
        <p>{text.length>0? text:'Nothing to preview'}</p>
    </>
  );
}