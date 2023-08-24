import React, { useEffect, useState } from 'react';
import { Alert, Button, Form, Input, Radio, RadioChangeEvent, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useQuizContext } from '../../components/QuizContext';

interface Option {
  label: string;
  value: number;
}

interface Question {
  queId: number;
  text: string;
  options: Option[];
}

const questions: Question[] = [
  {
    queId: 1,
    text: 'Would you like to new series?',
    options: [
      { label: 'Excellent!', value: 1 },
      { label: 'Well', value: 2 },
      { label: 'Neutral', value: 3 },
      { label: 'Dissatisfied', value: 4 },
      { label: 'Very Dissatisfied', value: 5 },
      { label: 'Unstable', value: 6 },
    ],
  },
  {
    queId: 2,
    text: 'Would you like to new films?',
    options: [
      { label: 'Excellent!', value: 1 },
      { label: 'Well', value: 2 },
      { label: 'Neutral', value: 3 },
      { label: 'Dissatisfied', value: 4 },
      { label: 'Very Dissatisfied', value: 5 },
      { label: 'Unstable', value: 6 },
    ],
  },
  {
    queId: 3,
    text: 'Would you like to new documentaries?',
    options: [
      { label: 'Excellent!', value: 1 },
      { label: 'Well', value: 2 },
      { label: 'Neutral', value: 3 },
      { label: 'Dissatisfied', value: 4 },
      { label: 'Very Dissatisfied', value: 5 },
      { label: 'Unstable', value: 6 },
    ],
  },
];

export const QuizPage: React.FC = () => {
  // TODO: 5. get state from useQuizContext
  const { isFinished, setIsFinished, final, setFinal } = useQuizContext();
  const [currentQue, setCurrentQue] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<(number | null)[]>(
    questions.map(() => null)
  );
  const navigate = useNavigate();
  const [value, setValue] = useState(-1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const finish = () => {
    const tmpobj = { currentQue, value };
    setFinal((prevState: any) => [...prevState, tmpobj]);
    if (selectedOption !== null) {
      setIsFinished(true);
    }
    // navigate('/result');
    setSelectedOption(null);
    if (currentQue === questions.length - 1) {
      setCurrentQue(currentQue);
    }
    navigate('/result');
  };
  useEffect(() => {
    console.log(final);
  }, [final]);
  const nextQue = () => {
    if (value !== -1) {
      if (currentQue + 1 < questions.length) {
        const tmpobj = { currentQue, value };
        setFinal((prevState: any) => [...prevState, tmpobj]);
        setValue(-1);
        setCurrentQue(currentQue + 1);
      }
    }
  };
  return (
    <div className='container'>
      <h2 style={{ color: '#997272' }}>Question {currentQue + 1}</h2>
      <h4 style={{ color: '#997272' }}>{questions[currentQue].text}</h4>
      <div className='options'>
        <Form>
          <Radio.Group onChange={onChange} value={value}>
            <Space direction='vertical'>
              {questions[currentQue].options.map((option) => (
                <Radio key={option.value} value={option.value} style={{ color: '#997272' }}>
                  {option.label}
                </Radio>
              ))}{' '}
            </Space>
          </Radio.Group>
        </Form>
      </div>

      {currentQue < questions.length - 1 && (
        <Button onClick={nextQue} disabled={selectedOption === null} style={{ color: '#BC8F8F' }}>
          Next Question
        </Button>
      )}
      {currentQue === questions.length - 1 && (
        <Button
          onClick={finish}
          disabled={selectedOption === null || isFinished}
          style={{ color: '#BC8F8F' }}
        >
          Finish Quiz
        </Button>
      )}
      {currentQue === questions.length - 1 && <p>Last Question</p>}
    </div>
  );
};
