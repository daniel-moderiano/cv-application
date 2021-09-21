import React from 'react';

const PersonalSection = (props) => {
  const {firstName, lastName, currentRole, addressOne, addressTwo, phone, email, linkedin, summary} = props.data;

  return (
    <div className="personal">
      <div className="header">
        <h1 className="personal__name">{firstName} {lastName}</h1>
        <h2 className="personal__title">{currentRole}</h2>
      </div>
      <div className="personal__info">
        <div className="personal__address-one">{addressOne}</div>
        <div className="personal__address-two">{addressTwo}</div>
        <div className="personal__phone">{phone}</div>
        <div className="personal__email">{email}</div>
        <div className="personal__linkedin">{linkedin}</div>
      </div>
      <div className="summary">
        <h2 className="summary__title">Summary</h2>
        <p className="summary__text">{summary}</p>
      </div>
    </div>
  );
}

export default PersonalSection;
