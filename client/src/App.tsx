import { useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import NavBar from './components/navbar';
import {routes} from './routes';

function App() {
  useEffect(() => {
    document.getElementsByTagName("html")[0].classList.add("dark");
    document.getElementsByTagName("body")[0].classList.add("dark:bg-black");
  },[]);
  return (
    
    <div className="flex flex-col justify-between min-h-screen">
      <Router>
      <NavBar />
        <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
