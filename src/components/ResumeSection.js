const ResumeSection = (props) => {
  return (
    <section className="resume-section">
      <h2 className="resume-section__header">{props.title}</h2>
      <div className="resume-section__content"></div>
    </section>
  )
}

export default ResumeSection;
