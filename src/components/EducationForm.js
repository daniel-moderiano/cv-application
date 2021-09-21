import React, { useState } from "react";
import Field from "./Field";

const EducationForm = (props) => {

  const [disabled, setDisabled] = useState(false);

  const [data, setData] = useState({
    id: props.id,
    degree: "",
    school: "",
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
    <form onSubmit={(event) => { handleSubmit(event); props.onSave(data, 'education') }} className="form personal">
      <Field 
        fieldType="text" 
        name="degree" 
        label="Degree" 
        placeholder={""} 
        value={data.degree} 
        onChange={handleChange} 
        disabled={disabled}
      />
      <Field 
        fieldType="text" 
        name="school" 
        label="University or School" 
        placeholder={""} 
        value={data.school} 
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
        <label htmlFor="description" className="label">Description or Achievements (optional)</label>
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
  )
}

export default EducationForm;
