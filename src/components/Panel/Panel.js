import React from "react";
import FormFacts from "../Form/FormFacts";
import FileUpload from "../Form/FileUpload";
import List from "../Sections/List";
import { nanoid } from "nanoid";
import "./panel.css";

const Panel = () => {
  return (
    <React.Fragment>
      <div className="facts-box">
        <FormFacts key={nanoid()} type={"facts"} />
        <List key={nanoid()} type={"facts"}></List>
      </div>
      <div className="gallery-box">
        <FileUpload key={nanoid()} type={"images"} />
        <List key={nanoid()} type={"images"}></List>
      </div>
    </React.Fragment>
  );
};
export default Panel;
/**  */
