import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import client from './libs/client';
import reportWebVitals from './reportWebVitals';
import Loading from './components/common/Loading';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RecoilRoot>
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <App />
          </Suspense>
        </BrowserRouter>
      </RecoilRoot>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
