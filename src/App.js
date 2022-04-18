import './App.css';

import { Layout, RequireAuth } from './components';
import { StartPage, Dashboard, Statistics, Profile, Settings } from './pages';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    // <div>
    //   <Router>
    //     {/* <SideNavbar/> */}
    //     <Routes>
    //       <Route path="/" element={<StartPage />} />
    //       <Route path="/dashboard" element={<Dashboard />} />
    //       <Route path="/statistics" element={<Statistics />} />
    //       <Route path="/profile" element={<Profile />} />
    //       <Route path="/settings" element={<Settings />} />
    //     </Routes>
    //   </Router>
    // </div>
    <Routes>
      <Route path='/' element={<Layout/>}>
        {/* Public Routes */}
        <Route path="/" element={<StartPage />} />
        {/* <Route path="unauthorized" element={<Unauthorized />} /> */}
        {/* <Route path="dashboard" element={<Dashboard />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} /> */}

        {/* Private Routes */}
        <Route element={<RequireAuth/>}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        {/* Catch all
        <Route path="*" element={<Missing />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
