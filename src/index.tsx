import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { App } from './App';
import { Dialogs } from './dialog';
import GlobalStyle from './styles/globalStyle';

const $root = document.getElementById('root');

$root &&
  ReactDOM.render(
    <React.StrictMode>
      <RecoilRoot>
        <Dialogs />
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </RecoilRoot>
    </React.StrictMode>,
    $root,
  );
