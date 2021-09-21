import React from 'react'

const ResumeSection = (props) => {
  return (
    <section className="resume-section">
      <h2 className="resume-section__header">{props.title}</h2>
      <div className="resume-section__content">
        {props.children}
      </div>
    </section>
  )
}

export default ResumeSection;

