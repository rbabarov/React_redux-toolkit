import React from "react";
import { useDispatch } from "react-redux";
import { inputImage, showList } from "../../redux-toolkit/slices/imageSlices";
import Button from '@mui/material/Button';



const FileUpload = (data) => {
  const dispatch = useDispatch();

  const { type } = data;

  const handleUpload = (event) => {
    event.preventDefault();

    if (!event.target.files[0]) {
      return;
    }
    dispatch(inputImage(URL.createObjectURL(event.target.files[0])));
    dispatch(showList(URL.createObjectURL(event.target.files[0])));
  };

  return (
    <React.Fragment>
            <h2 className="h2">Задание №2</h2>
      <div className={type + "-form-box"}>
        <input
          type="file"
          accept="image/*"
          // style={{ display: "none" }}
          id="contained-button-file"
          onChange={handleUpload}
        />
        {/* <label htmlFor="contained-button-file">
        <Button variant="contained"> Загрузить </Button>
        </label> */}
      </div>
    </React.Fragment>
  );
};

export default FileUpload;
