import React  from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../features/HomePage';
import StudentsPage from '../features/StudentDetail/StudentsPage';
import ContactUsPage from '../features/ContactUsPage';
import StudentEditpage from '../features/StudentDetail/StudentEditpage';

const RoutingPage = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='student' element={<StudentsPage/>}/>
        <Route path='ContactPage' element={<ContactUsPage/>}/>
        <Route path='studentpage' element={<StudentEditpage/>}/>
        <Route path='studentpage/:id' element={<StudentEditpage/>}/>
    </Routes>
    </>
  )
}

export default RoutingPage

