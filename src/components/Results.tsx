import React from 'react';
import { Result as AntResult, Input } from 'antd';
import { useQuizContext } from './QuizContext';

const { TextArea } = Input;

export const Result: React.FC = () => {
  const { isFinished, final } = useQuizContext();

  return isFinished === true ? (
    <>
      <AntResult status='success' title={final.length} />
      <p style={{ color: '#BC8F8F' }}>Please Write Suggestions If You Have</p>
      <TextArea rows={4} placeholder='maxLength is 50' maxLength={50} />
    </>
  ) : (
    <AntResult status='error' title='You have failed!' />
  );
};

//   <AntResult
//      status={isFinished === true ? 'success' : 'error'}
//    title={isFinished === true ? 'Survey Successfully Completed!'
//      <>  <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} /> < />
//    : 'You have failed!'}

/// >
