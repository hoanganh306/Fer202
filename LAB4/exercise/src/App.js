import React from 'react';
import QuizManager from './component/QuizManager';
import { QuizProvider } from './component/QuizContext';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <QuizProvider>
      <QuizManager />
    </QuizProvider>
  );
}

export default App;
