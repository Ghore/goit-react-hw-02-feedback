import React from "react";
import PropTypes from "prop-types";
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {Object.keys(options).map((key) => (
        <button
          type="button"
          name={key}
          key={key}
          onClick={onLeaveFeedback}
          className="optionBtn"
        >
          {key}
        </button>
      ))}
    </>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
