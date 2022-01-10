import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { InterviewRoom, ReviewRoom, SettingRoom, WaitingRoom } from './pages';
import {
  ROUTE_HOME,
  ROUTE_REVIEW,
  ROUTE_INTERVIEW,
  ROUTE_SETTING,
} from './routes';

export const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={ROUTE_HOME} element={<WaitingRoom />} />
        <Route path={ROUTE_INTERVIEW} element={<InterviewRoom />} />
        <Route path={ROUTE_REVIEW} element={<ReviewRoom />} />
        <Route path={ROUTE_SETTING} element={<SettingRoom />} />
      </Routes>
    </div>
  );
};
