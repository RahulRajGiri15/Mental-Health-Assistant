import React from 'react';
import EmergencyAlert from './components/EmergencyAlert.jsx';
import EmotionalAnalysis from './components/EmotionalAnalysis.jsx';  
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import MentalHealthAssistant from './components/MentalHealthAssistant.jsx';
import PeerSupport from './components/PeerSupport.jsx';
import SupportPlan from './components/SupportPlan.jsx';
//import LandingPage from './components/LandingPage.jsx';

function App() {
  return (
    <div>
      <Header />
      
      <EmotionalAnalysis />
      <SupportPlan />  
      <PeerSupport />
      <EmergencyAlert />
      
      <Footer /> 
    </div>
  );
}

export default App; 