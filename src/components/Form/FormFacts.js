import React, { useRef } from "react";
import { nanoid } from "nanoid";
import { Text, Input } from "../Atoms/Atoms";
import { inputValue, filtered } from "../../redux-toolkit/slices/toolkitSlices";
import { useDispatch } from "react-redux";

const FormFacts = (data) => {
  const tooltipeRef = useRef();
  const dispatch = useDispatch();

  const { type } = data;
  let amount;
  const handleInput = (event) => {
    event.preventDefault();
    if (event.target.value < 1 || event.target.value > 5) {
      tooltipeRef.current.style["visibility"] = "visible";
      amount = 0;
    } else {
      tooltipeRef.current.style["visibility"] = "hidden";
      amount = event.target.value;
    }
    dispatch(inputValue(amount));
    dispatch(filtered(amount));
  };

  return (
    <React.Fragment>
      <div className="form-field-wrapper">
      <h2 className="h2">Задание №1</h2>
        <form className={type + "-forms"}>
          <Input
            onChange={handleInput}
            name="facts"
            type="number"
            className="field-facts__input"
            max={5}
            min={1}
            placeholder={"Введите число от 1 до 5"}
          ></Input>
        </form>
        <Text
          ref={tooltipeRef}
          key={nanoid()}
          className={data.type + "-form-tooltipe tooltipe"}
          text={"*Выберите число от 1 до 5"}
        />
      </div>
    </React.Fragment>
  );
};

export default FormFacts;
