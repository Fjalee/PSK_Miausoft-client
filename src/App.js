import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import ErrorPage from './pages/ErrorPage';
import CreateOrderPage from './pages/CreateOrderPage';
import TrackParcel from './pages/TrackParcel/TrackParcel';
import ParcelInformationPage from './pages/ParcelInformationPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/createorder/:deliveryType" element={<CreateOrderPage />} />
          <Route path="/parcel/:parcelId" element={<ParcelInformationPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/trackParcel" element={<TrackParcel />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;
