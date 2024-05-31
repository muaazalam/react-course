import React from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { useState } from "react";

const Todos = (props) => {
    const [modalIsOpen, setModalIsOpen]=useState(false);
    function deleteHandler(){
        setModalIsOpen(true);    
    }

    function closeModalHandler(){
        setModalIsOpen(false);
    }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>DELETE</button>
      </div>
      {modalIsOpen&&<Modal onConfirm={closeModalHandler} onCancel={closeModalHandler}/>}
      {modalIsOpen&&<Backdrop onCancel={closeModalHandler}/>}
    </div>
  );
};

export default Todos;
