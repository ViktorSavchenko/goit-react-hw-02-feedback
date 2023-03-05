import React, { Component } from "react";
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  countTotalFeedback = option => {   
    this.setState(prevState => (    
      { [option]: prevState[option] + 1 }       
    ))    
  };
  
  countTotal = () => ( 
    Object.values(this.state).reduce((acc, value) => (acc + value), 0)
  );  
  
  countPositiveFeedbackPercentage = () => {
    return (this.state.good/this.countTotal())*100
  };   
  
  render() {
    let positivePercentage = Math.round(this.countPositiveFeedbackPercentage());
    let totalFeedback = this.countTotal();
    const { good, neutral, bad } = this.state;    
     
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={ ['Good', 'Neutral', 'Bad']} onLeaveFeedback={this.countTotalFeedback } />
        
        {totalFeedback === 0 ?
          (<Notification message="There is no feedback"/>) :
          (<Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={positivePercentage} />)}      
      </Section>
    )
  }
}


export default App;
