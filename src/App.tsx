import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { store } from './redux/store/store';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import customRoutes from './components/navigation/customRoutes';
import NotFoundPage from './pages/NotFound/NotFoundPage';

function App() {
  
  
  const renderRoutes = () => {
    const allRoutes = customRoutes.map(r => <Route key={0} path={r.path || ''} element={<r.component />} />);
    return [...allRoutes, <Route key={0} path='*' element={<NotFoundPage />} />];
  }

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          {renderRoutes()}
        </Routes>
      </Router>      
    </Provider>    
  );
}

export default App;
