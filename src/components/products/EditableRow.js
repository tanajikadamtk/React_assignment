import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Enter a number..."
          name="age"
          value={editFormData.age}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a city..."
          name="city"
          value={editFormData.city}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a gender..."
          name="gender"
          value={editFormData.gender}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Enter a salary..."
          name="salary"
          value={editFormData.salary}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit" className="btn btn-success fw-bold">Save</button>
        <button type="button" onClick={handleCancelClick} className="btn btn-danger mx-1 fw-bold">
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
