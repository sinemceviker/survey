import React, { useState } from 'react';
import { Button } from 'antd';

import { useQuizContext } from '../components/QuizContext';

export const Home = () => {
  const [displayQuiz, setDisplayQuiz] = useState<boolean>(false);
  const { isFinished } = useQuizContext();
  const startQuiz = () => {
    setDisplayQuiz(true);
  };
  return (
    <div className='Welcome'>
      <h1 style={{ color: '#997272' }}>Welcome To Survey,Please Click Start To Begin!</h1>
      <Button
        type='primary'
        onClick={startQuiz}
        href='/quiz'
        style={{ color: '#FFFFFF', background: '#BC8F8F' }}
      >
        Start
      </Button>
    </div>
  );
};
