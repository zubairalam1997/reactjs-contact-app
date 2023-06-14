import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

const AddContact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number , setNumber] = useState("");//new

  const {addContactHandler} = useContactsCrud();
  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || number === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    addContactHandler({name, email ,number});
    setEmail("");
    setName("");
    setNumber("");//num
    navigate("/");
  };
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value )}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value )}
            />
          </div>
          <div className="field">
            <label>Number</label>
            <input
              type="text"
              name="number"
              placeholder="number"
              value={number}
              onChange={(e) => setNumber(e.target.value )}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
}

export default AddContact;