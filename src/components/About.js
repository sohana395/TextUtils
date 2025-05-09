import React from 'react'

export default function About() {
  return (
    <>
        <div className="container">
            <div className="card mx-auto my-3" style={{width: '700px'}}>
                <div className="card-body">
                    <h4 className="card-title">About Us</h4>
                    <p className="card-text">Text manipulation is the process of transforming, modifying, or formatting textual data to enhance readability, perform analysis, or serve a specific purpose. In applications like TextUtils, users can input text and apply a variety of transformations to it quickly and efficiently.<br/><br/>
                    Here are some common types of text manipulation in this application:</p>
                    <ul>
                        <li>Text can be converted to uppercase, where all characters are capitalized.</li>
                        <li>It can also be converted to lowercase, making all characters small.</li>
                        <li>Another option is title case, where the first letter of each word is capitalized.</li>
                        <li>Extra spaces in the text can be removed to make it cleaner.</li>  
                        <li>It also shows how many words are there in the entered text.</li>  
                        <li>Can see the preview.</li>
                        <li>Can copy text to clipboard.</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}
