import React from 'react';
import { Container, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="my-5">
      <Card className="p-4 shadow-sm">
        <h2 className="mb-3">About Us</h2>
        <p>
          Welcome to our online quiz platform! We are passionate about providing fun and engaging quizzes to help you learn and test your knowledge. 
          This project is built with React Router and React Bootstrap to deliver a smooth user experience.
        </p>
        <p>
          Explore our News page for food-related articles, try out the Quiz section, or contact us for more information. Happy quizzing!
        </p>
      </Card>
    </Container>
  );
};

export default About;
