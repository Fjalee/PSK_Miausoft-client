import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import ErrorPage from './pages/ErrorPage';
import CreateOrderPage from './pages/CreateOrderPage';
import ParcelInformationPage from './pages/ParcelInformationPage';
import ProtectedRoute from './security/ProtectedRoute';
import { ROLES } from './security/Roles';
import { AxiosInterceptor } from './services/Client';
import AllParcelsPage from './pages/AllParcelsPage';
import DeliveryPlan from './pages/DeliveryPlan';

class App extends Component {
  render() {
    return (
      <AxiosInterceptor>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/createorder/:deliveryType" element={<CreateOrderPage />} />
            <Route path="/parcel/:parcelId" element={<ParcelInformationPage />} />
            <Route path="/admin/parcels" element={
              <ProtectedRoute roles={[ROLES.ADMIN]}>
                <AllParcelsPage />
              </ProtectedRoute>
            } />
            <Route path="/admin/deliveryplan/:parcelId" element={
              <ProtectedRoute roles={[ROLES.ADMIN]}>
                <DeliveryPlan />
              </ProtectedRoute>
            } />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </Router>
      </AxiosInterceptor>
    );
  }
}

export default App;

