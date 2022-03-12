import React from "react";

const MyParagraph = (props) => {
   console.log('MyParagrap RUNNING!')
   return (
      <p>{props.children}</p>
   )
}

export default MyParagraph;