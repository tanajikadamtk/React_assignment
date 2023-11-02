import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.age}</td>
      <td>{contact.city}</td>
      <td>{contact.gender}</td>
      <td>{contact.salary}</td>
      <td>
        <button
          type="button"
          className="btn btn-primary "
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger mx-1 "
          onClick={() => handleDeleteClick(contact.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
