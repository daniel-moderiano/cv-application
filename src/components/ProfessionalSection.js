import React from 'react';

const ProfessionalSection = (props) => {
  const {company, city, position, startDate, endDate, description} = props.data;

  return (
    <div className="professional__section">
      <div className="professional__company">{company}</div>
      <div className="professional__city">{city}</div>
      <div className="professional__job">{position}</div>
      <div className="professional__time">{`${startDate} - ${endDate}`}</div>
      <div className="professional__desc">{description}</div>
    </div>
  )
}

export default ProfessionalSection;