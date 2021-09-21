import React, { useState } from "react";
import Field from "./Field";

const ProfessionalExpForm = (props) => {

  const [disabled, setDisabled] = useState(false);

  const [data, setData] = useState({
    id: props.id,
    position: "",
    company: "",
    city: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisabled(true);
  }
  
  const handleEdit = () => {
    setDisabled(false);
  }

  return (
    <form onSubmit={(event) => { handleSubmit(event); props.onSave(data, 'professional') }} className="form personal">
      <Field 
        fieldType="text" 
        name="position" 
        label="Position" 
        placeholder={""} 
        value={data.position} 
        onChange={handleChange}
        disabled={disabled}
      />
      <Field 
        fieldType="text" 
        name="company" 
        label="Company" 
        placeholder={""} 
        value={data.company} 
        onChange={handleChange}
        disabled={disabled}
      />
      <Field 
        fieldType="text" 
        name="city" 
        label="City" 
        placeholder={""} 
        value={data.city} 
        onChange={handleChange}
        disabled={disabled}
      />
      <Field 
        fieldType="text" 
        name="startDate" 
        label="Start Date" 
        placeholder={"YYYY"} 
        value={data.startDate} 
        onChange={handleChange}
        disabled={disabled}
      />
      <Field 
        fieldType="text" 
        name="endDate" 
        label="End Date" 
        placeholder={"YYYY or Present"} 
        value={data.endDate} 
        onChange={handleChange}
        disabled={disabled}
      />

      <div className="field">
        <label htmlFor="description" className="label">Job description (optional)</label>
        <textarea 
          name="description" 
          id="description" 
          cols="30" 
          rows="10" 
          value={data.description} 
          onChange={handleChange}
          disabled={disabled}>
        </textarea>
      </div>
      

      <button type="submit">Save</button>
      <button type="button" onClick={handleEdit}>Edit</button>
      <button type="button" className="add" onClick={props.onAdd}>Add</button>
      <button type="button" className={(props.index === 0) ? 'delete hidden' : 'delete'} onClick={() => props.onDelete(data.id)}>Delete</button>
    </form>
  );
}

export default ProfessionalExpForm;
