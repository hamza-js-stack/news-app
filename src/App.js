import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import News from './Components/News';
import Features from './Components/Features';
import CricketNews from './Components/CricketNews';
import WeatherNews from './Components/WeatherNews';

export default class App extends Component {
  render() {
    return (
      <Router basename="/news-app">
        <Navbar />
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/features" element={<Features />} />
          <Route path="/cricket" element={<CricketNews />} />
          <Route path="/weather" element={<WeatherNews />} />
        </Routes>
      </Router>
    );
  }
}
