import ResumeSection from "./ResumeSection";

const Main = () => {
  return (
    <main className="main">
      <ResumeSection title="Summary" />
      <ResumeSection title="Experience" />
      <ResumeSection title="Education" />
      <ResumeSection title="Key Skills" />
      <ResumeSection title="Interests" />
    </main>
  )
}

export default Main;
