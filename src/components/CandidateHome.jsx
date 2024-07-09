import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import apiService from '../services/apiService';
import SearchComponent from './SearchComponent';
import ListCard from './ListCard';

function CandidateHome() {
  const history = useHistory();
  const [referrals, setReferrals] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      history.push('/login');
    } else {
      // Fetch referrals and services
      apiService.getReferrals()
        .then(response => setReferrals(response.data))
        .catch(error => console.error(error));

      apiService.getServices()
        .then(response => setServices(response.data))
        .catch(error => console.error(error));
    }
  }, [history]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>Candidate Home</h2>
      <button onClick={handleLogout} className="btn btn-danger">Logout</button>
      <SearchComponent />
      <ListCard title="Referrals" items={referrals} />
      <ListCard title="Services" items={services} />
    </div>
  );
}

export default CandidateHome;
