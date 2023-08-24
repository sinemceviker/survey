import React from 'react';
import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import { QuizPage } from './pages/Example/QuizPage';
import { Home } from './pages/Home';
import { QuizProvider } from './components/QuizContext';
import { Result } from './components/Results';
import { Dashboard } from './components/Dashboard';

// TODO: 4. wrap Routes with the context provider
export const App = () => (
  <QuizProvider>
    <Routes>
      <Route path='/' element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path='quiz' element={<QuizPage />} />
        <Route path='result' element={<Result />} />
      </Route>
    </Routes>
  </QuizProvider>
);
