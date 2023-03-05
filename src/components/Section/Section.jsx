import './Section.css'

function Section({ title, children }) { 
  return (
  <div className="Feedback-section Feedback">
      <h1  className="Feedback-title">{title}</h1>
      { children }
  </div>
  )
};

export default Section;