import React, { useReducer } from "react";
import reducer, { initialState } from "./reducers/index";
import "./App.css";
import {
  addOne,
  addToMemory,
  applyNumber,
  changeOperation,
  clearDisplay,
} from "./actions/index";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const handleApply = (e) => {
  //   e.preventDefault();
  //   dispatch({type: "APPLY_NUMBER", payload: 1})
  // }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img width="40px" src="./Lambda-Logo-Red.png" /> Lambda Reducer
          Challenge{" "}
        </a>{" "}
      </nav>{" "}
      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />{" "}
            <div className="row details">
              <span id="operation">
                <b> Operation: </b> {state.operation}{" "}
              </span>{" "}
              <span id="memory">
                <b> Memory: </b> {state.memory}{" "}
              </span>{" "}
            </div>{" "}
            <div className="row">
              <CalcButton onClick={() => {
                  dispatch(addToMemory(state.total));
                }} value={"M+"} /> 
              <CalcButton value={"MR"} />{" "}
              <CalcButton value={"MC"} />{" "}
            </div>{" "}
            <div className="row">
              <CalcButton
                onClick={() => {
                  dispatch(applyNumber(1));
                }}
                value={1}
              />{" "}
              <CalcButton
                onClick={() => {
                  dispatch(applyNumber(2));
                }}
                value={2}
              />{" "}
              <CalcButton value={3} />{" "}
            </div>{" "}
            <div className="row">
              <CalcButton value={4} />
              <CalcButton value={5} /> <CalcButton value={6} />{" "}
            </div>{" "}
            <div className="row">
              <CalcButton value={7} />
              <CalcButton value={8} /> <CalcButton value={9} />{" "}
            </div>{" "}
            <div className="row">
              <CalcButton
                onClick={() => {
                  dispatch(changeOperation("+"));
                }}
                value={"+"}
              />
              <CalcButton
                onClick={() => {
                  dispatch(changeOperation("*"));
                }}
                value={"*"}
              />{" "}
              <CalcButton
                onClick={() => {
                  dispatch(changeOperation("-"));
                }}
                value={"-"}
              />{" "}
            </div>{" "}
            <div className="row ce_button">
              <CalcButton
                onClick={() => {
                  dispatch(clearDisplay());
                }}
                value={"CE"}
              />{" "}
            </div>{" "}
          </form>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default App;
