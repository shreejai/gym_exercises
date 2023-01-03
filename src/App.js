import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import Navbar from './assets/components/Navbar';
import Home from './assets/pages/Home';
import ExerciseDetail from './assets/pages/ExerciseDetail';
import Footer from './assets/components/Footer';

const App = () => {
  return (
    <Box width="400px" sx={{  width:  {xl: '1488px' } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App