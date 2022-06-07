import React, { useState } from 'react';
import { marked } from 'marked';
import './App.scss';


//a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

function App() {
  const [text , setText]=useState(`
  # Welcome to my React Markdown Previewer!
  ## This is a sub-heading...

  There is also [links](https://www.freecodecamp.org)

  Here is a line of code, between two backticks.\`<div></div>\`

  And here you can see a multiline code:
  \`\`\`
  const object= {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\` 

  - And of course there are lists.
    - With differente levels:
      - That look like this.


 > Block Quotes!

  Writting **Bold Text**  
  
  And inserting images:

  ![Inserting a image](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0hf4IFXn43yiouTuXF9evNEROPkNymk9aXQ&usqp=CAU)
  `)

  function getChange(variable) {
    setText(variable.target.value)
  }

  return (
    <div className="App">
      <div id="box-editor">

        <div id="header-editor">
        <i class="fa-brands fa-free-code-camp"></i> Editor
        </div>

        <textarea 
          rows={10}
          id="editor" 
          value={text} 
          onChange={getChange}
        ></textarea>

      </div>

      <div id="box-preview">

        <div id="header-preview">
        <i class="fa-brands fa-free-code-camp"></i>  Previewer
        </div>

        <div 
          id="preview"
          dangerouslySetInnerHTML={{__html: marked(text)}}
        ></div>

      </div>

    </div>
  );
}

export default App;

