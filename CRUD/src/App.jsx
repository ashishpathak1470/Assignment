import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './comp/Home';
import Form from './comp/Form';
import Details from './comp/Details';
import ParentComponent from './comp/ParentComponent';

function App() {
  return (
    <Router>
      <ParentComponent>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="create" element={<Form />} />
            <Route path="detail" element={<Details />} />
            <Route path="update" element={<Form />} />
          </Route>
        </Routes>
      </ParentComponent>
    </Router>
  );
}

export default App;
