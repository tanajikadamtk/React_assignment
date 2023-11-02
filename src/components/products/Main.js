import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import data from "../server/employe.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

const Main = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    age: "",
    city: "",
    gender: "",
    salary: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    age: "",
    city: "",
    gender: "",
    salary: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      age: addFormData.age,
      city: addFormData.city,
      gender: addFormData.gender,
      salary: addFormData.salary,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      age: editFormData.age,
      city: editFormData.city,
      gender: editFormData.gender,
      salary: editFormData.salary,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      age: contact.age,
      city: contact.city,
      gender: contact.gender,
      salary: contact.salary,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <>
      <div
        className="w-100  vh-100"
        style={{ backgroundColor: "#223", color: "#fff", paddingTop: "30px" }}
      >
        <div className="container">
          <form onSubmit={handleEditFormSubmit}>
            <table className="table ">
              <thead className=" text-white" style={{ backgroundColor: "red" }}>
                <tr>
                  
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">City</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Salary</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody
                className=" fw-bold"
                style={{ backgroundColor: "#0c1e45", color: "#fff" }}
              >
                {contacts.map((contact) => (
                  <Fragment>
                    {editContactId === contact.id ? (
                      <EditableRow
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <ReadOnlyRow
                        contact={contact}
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}
                      />
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </form>

          <h2>Add a Contact</h2>
          <form onSubmit={handleAddFormSubmit} className="input-group">
            <input
              type="text"
              name="fullName"
              required="required"
              placeholder="Enter a name..."
              className="form-control"
              onChange={handleAddFormChange}
            />
            <input
              type="number"
              name="age"
              required="required"
              placeholder="Enter an age..."
              className="form-control"
              onChange={handleAddFormChange}
            />
            <input
              type="text"
              name="city"
              required="required"
              placeholder="Enter a city..."
              className="form-control"
              onChange={handleAddFormChange}
            />
            <input
              type="text"
              name="gender"
              required="required"
              placeholder="Enter a gender..."
              className="form-control"
              onChange={handleAddFormChange}
            />

            <input
              type="number"
              name="salary"
              required="required"
              placeholder="Enter a salary..."
              className="form-control"
              onChange={handleAddFormChange}
            />
            <button type="submit" className="btn btn-success ">
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Main;
