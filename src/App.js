import React from 'react';
import './App.css';
import Blog from './Pages/Blog';
import Bloglist from './Pages/Bloglist';
import Contact from './Pages/contact';
import Singalroom from './Pages/Singalroom';
import Doubalroom from './Pages/Doubalroom';
import OurGallery from './Pages/OurGallery';
import Spa from './Pages/Spa';
import Team from './Pages/Team';
import Servicies from './Pages/Servicies';
import About from './Pages/About';
import Book from './Pages/Book';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstChef from './Pages/FirstChef';
import SecondChef from './Pages/SecondChef';
import ThirdChef from './Pages/ThirdChef';
import Spafaq from './Pages/Spafaq';
import Restorant from './Pages/Restorant';
import Pricing from './Pages/Pricing';
function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>}/>
    <Route path='/Singalroom' element={<Singalroom/>}/>
    <Route path='/doubalroom' element={<Doubalroom/>}/>
    <Route path='/servicies' element={<Servicies/>}/>

    <Route path='/spa' element={<Spa/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/team' element={<Team/>}/>
    <Route path='/ourGallery' element={<OurGallery/>}/>
    <Route path='/pricing' element={<Pricing/>}/>
    <Route path='/bloglist' element={<Bloglist/>}/> 
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/spafaq' element={<Spafaq/>} />
    <Route path='/restaurent' element={<Restorant/>}/>
    <Route path='/firstChef' element={<FirstChef/>}/>
    <Route path='/secondChef' element={<SecondChef/>}/>
    <Route path='/thirdChef' element={<ThirdChef/>}/>
    <Route path='/booknow' element={<Book/>}/>
    <Route path='*' element={<h1>404</h1>}/>
   </Routes>
   
   </BrowserRouter>
   {/* <Singalroom/> */}
   </>
  );
}

export default App;
