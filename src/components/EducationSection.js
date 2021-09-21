import React from 'react';

const EducationSection = (props) => {
  const {school, city, degree, startDate, endDate, description} = props.data;

  return (
    <div className="education__section">
      <div className="education__school">{school}</div>
      <div className="education__city">{city}</div>
      <div className="education__degree">{degree}</div>
      <div className="education__time"><div className="professional__time">{`${startDate} - ${endDate}`}</div></div>
      <div className="education__desc">{description}</div>
    </div>
  )
}

export default EducationSection;

