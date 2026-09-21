import {useState} from "react";

export default function TextArea() {

  const [text, setText] = useState("");
 
  return (
    <textarea
      value={text}
      className="textarea"
      onChange= {(e)=>{
        const newText = e.target.value;
        if (newText.includes("<script>")){
          alert("Script tags are not allowed!");
          return;
        }
        setText(newText);
      }}

      placeholder="Enter your text"
      spellCheck="true"
    />
  );
}
