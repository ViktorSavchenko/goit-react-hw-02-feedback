import './FeedbackOptions.css'

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className="Feedback-btn-wrapper">
      {options.map((option) => (
        <button
          className="Feedback-btn"
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option.toLowerCase())}
        >
          {option}
        </button>
      ))}
    </div>
  )
};

export default FeedbackOptions;