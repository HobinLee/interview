import { FC, ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

import { InterviewRoom, ReviewRoom, SettingRoom, WaitingRoom } from './pages';

export const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WaitingRoom />} />
        <Route path="/interview" element={<InterviewRoom />} />
        <Route path="/review" element={<ReviewRoom />} />
        <Route path="/setting" element={<SettingRoom />} />
      </Routes>
    </div>
  );
};
