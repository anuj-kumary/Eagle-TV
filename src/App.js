import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import Mockman from 'mockman-js';
import { LandingPage } from './pages/Landing-Page/LandingPage';
import { VideoListing } from './pages/VideoListing/VideoListing';
import { SingleVideo } from './pages/SingleVideo/SingleVideo';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/mockman' element={<Mockman />}></Route>
        <Route path='/video' element={<VideoListing />}></Route>
        <Route path='/singlevideo/:videoID' element={<SingleVideo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
