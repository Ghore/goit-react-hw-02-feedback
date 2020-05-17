import React, { Component } from "react";

import Section from "./Section";
import Notification from "./Notification";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state.good) {
      return Math.round((this.state.good * 100) / this.countTotalFeedback());
    } else {
      return 0;
    }
  };
  handleClick = (e) => {
    const { name } = e.target;
    this.setState((state) => ({ [name]: state[name] + 1 }));
    this.countTotalFeedback();
  };
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleClick}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="No feedback given"></Notification>
          )}
        </Section>
      </>
    );
  }
}
