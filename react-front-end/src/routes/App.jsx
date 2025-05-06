import React from 'react'
import {Routes, Route } from "react-router-dom";


import AppLayout from './AppLayout';


import Home from '../pages/navigation/Home';
import MachineLearning from '../pages/navigation/MachineLearning';
import DeepLearning from '../pages/navigation/DeepLearning';
import WebDevelopment from '../pages/navigation/WebDevelopment';


import Account from '../layouts/Account';
import SigIn from '../pages/account/SigIn';
import SigUp from '../pages/account/SigUp';


import HTMLHistory from '../pages/web-development/code-html/HTMLHistory';
import HTMLBasic from '../pages/web-development/code-html/HTMLBasic';
import HTMLForm from '../pages/web-development/code-html/HTMLForm';
import HTMLMultimedia from '../pages/web-development/code-html/HTMLMultimedia';
import HTMLSemantic from '../pages/web-development/code-html/HTMLSemantic';
import HTMLAttribute from '../pages/web-development/code-html/HTMLAttribute';
import HTMLAdvanced from '../pages/web-development/code-html/HTMLAdvanced';




function App() {
    return (
      <>
        <Routes>

          <Route element={<AppLayout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/machine-learning" element={<MachineLearning />} />
            <Route path="/deep-learning" element={<DeepLearning />} />
            <Route path="/web-development" element={<WebDevelopment />}>
              <Route path="html-history" element={<HTMLHistory />} />
              <Route path="html-basic" element={<HTMLBasic />} />
              <Route path="html-form" element={<HTMLForm />} />
              <Route path="html-multimedia" element={<HTMLMultimedia />} />
              <Route path="html-semantic" element={<HTMLSemantic />} />
              <Route path="html-attribute" element={<HTMLAttribute />} />
              <Route path="html-advanced" element={<HTMLAdvanced />} />
            </Route>
          </Route>

          <Route element={<Account/>}>
            <Route path="/account-sig-in" element={<SigIn />} />
            <Route path="/account-sig-up" element={<SigUp />} />
          </Route>

        </Routes>
      </>
    );
  }
  
export default App;