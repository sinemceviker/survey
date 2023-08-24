import React, { useEffect, createContext, useContext, useState } from 'react';

interface QuizContextType {
  final: Array<any>;
  setFinal: (final: Array<any>) => void;
  isFinished: boolean;
  setIsFinished: (isFinished: boolean) => void;
}

const initialState: QuizContextType = {
  isFinished: false,
  final: Array<any>,

  setIsFinished: () => undefined,
};
// TODO: 1. create context
const QuizContext = createContext<QuizContextType>(initialState);
// TODO: 2. create wrapper comonent
interface QuizProviderProps {
  children: React.ReactNode;
}
export const QuizProvider: React.FC<QuizProviderProps> = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;

  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [final, setFinal] = useState<Array<any>>([]);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <QuizContext.Provider value={{ isFinished, setIsFinished, final, setFinal }}>
      {children}
    </QuizContext.Provider>
  );
};

// TODO: 3. create shortcut hook useQuizContext
export const useQuizContext = () => useContext(QuizContext);
