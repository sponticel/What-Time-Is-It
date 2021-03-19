// Source used for drag and drop feature: https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/#what-is-drag-and-drop
import React from "react";
import { useParams } from "react-router-dom";



function Taskform(props) {
  const params = useParams();
  const taskList = props.labels.find((label) => params.name === label.task);
  if (!taskList) {
    return <h2> Loading content ...</h2>
  }

  // const {task,date} = props.task.fields;
  return (
    <div className="main">
      <h3>{task}</h3>
      <h4>{date}</h4>
    </div>

  )
}

export default Taskform;