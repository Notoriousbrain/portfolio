import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Home, Create, ProjectDetails } from './pages';
import { Navbar, Footer } from './components';

function App() {
    const [isDark, setIsDark] = useState(true);
    const [userTheme, setUserTheme] = useState();

   useEffect(() => {
     const themeCheck = () => {
       if (
         localStorage.theme === "dark" ||
         (!("theme" in localStorage) &&
           window.matchMedia("(prefers-color-scheme: dark)").matches)
       ) {
         document.documentElement.classList.add("dark");
         setUserTheme("dark");
       } else {
         setUserTheme("light");
         document.documentElement.classList.remove("dark");
       }
     };
     themeCheck();
   }, [userTheme]);

    const themeSwitch = () => {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setUserTheme("light");
        setIsDark(false);
        return;
      }
      document.documentElement.classList.add("dark");
      setUserTheme("dark");
      setIsDark(true);
      localStorage.setItem("theme", "dark");
    };

    
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          themeSwitch={themeSwitch}
          isDark={isDark}
          setIsDark={setIsDark}
        />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/create" element={<Create isDark={isDark} />} />
          <Route exact path="/project/:id" element={<ProjectDetails isDark={isDark} />} />
        </Routes>
        <Footer isDark={isDark} />
      </BrowserRouter>
    </div>
  );
}

export default App;
