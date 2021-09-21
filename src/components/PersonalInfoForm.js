import React, { useState } from "react";
import Field from "./Field";

const PersonalInfoForm = (props) => {

  const [disabled, setDisabled] = useState(false);

  const [data, setData] = useState({
    id: props.id,
    firstName: "",
    lastName: "",
    currentRole: "",
    addressOne: "",
    addressTwo: "",
    email: "",
    phone: "",
    linkedin: "",
    summary: "",
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
    <form onSubmit={(event) => { handleSubmit(event); props.onSave(data, 'personal') }} className="form personal">
      <Field 
        fieldType="text" 
        name="firstName" 
        label="First Name" 
        placeholder={""} 
        value={data.firstName} 
        onChange={handleChange} 
        disabled={disabled}
      />
      <Field 
        fieldType="text" 
        name="lastName" 
        label="Last Name" 
        placeholder={""} 
        value={data.lastName} 
        onChange={handleChange}
        disabled={disabled}
      />
      <Field 
        fieldType="text" 
        name="currentRole" 
        label="Current Role" 
        placeholder={""} 
        value={data.currentRole} 
        onChange={handleChange}
        disabled={disabled}
      />
      <Field 
        fieldType="text" 
        name="addressOne" 
        label="Address Line 1" 
        placeholder={""} 
        value={data.addressOne} 
        onChange={handleChange}
        disabled={disabled}
        />
      <Field 
        fieldType="text" 
        name="addressTwo" 
        label="Address Line 2" 
        placeholder={""} 
        value={data.addressTwo} 
        onChange={handleChange}
        disabled={disabled}
        />
      <Field 
        fieldType="email" 
        name="email" 
        label="Email Address" 
        placeholder={""} 
        value={data.email} 
        onChange={handleChange}
        disabled={disabled}
      />
      <Field 
        fieldType="text" 
        name="phone" 
        label="Phone Number" 
        placeholder={""} 
        value={data.phone} 
        onChange={handleChange}
        disabled={disabled}
      />
      <Field 
        fieldType="url" 
        name="linkedin" 
        label="LinkedIn" 
        placeholder={"https://"} 
        value={data.linkedin} 
        onChange={handleChange}
        disabled={disabled}
      />

      <div className="field">
        <label htmlFor="summary">Summary</label>
        <textarea name="summary" id="summary" cols="30" rows="10" value={data.summary} onChange={handleChange} placeholder="Small bio about your professional self" disabled={disabled}></textarea>
      </div>
      <button type="submit">Save</button>
      <button type="button" onClick={handleEdit}>Edit</button>
    </form>
  );
}

export default PersonalInfoForm;
