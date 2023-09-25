// import React, { useState, useEffect } from 'react';
// import { Moon, Sun } from 'styled-icons/fa-solid';
// import '../../toggler.css'

// export default function Homepage() {
//   const[darkMode, setDarkMode] = useState(false);
//   useEffect(() =>{
//     if(darkMode){
//       document.body.classList.add('dark-mode')
//       document.body.classList.remove('light-mode')
//     }
//     else{
//       document.body.classList.add('light-mode')
//       document.body.classList.remove('dark-mode')
//     }
//   },[darkMode]);


//   return (<div>
//     <h1>Hi! I am Rahul</h1>
//       <div className ="toggle-button" onClick={() => setDarkMode(prev => !prev)}>
//       {darkMode 
//           ? <Sun className={`sun-icon ${darkMode ? 'icon-dark' : 'icon-light'}`} /> 
//           : <Moon className={`moon-icon ${darkMode ? 'icon-dark' : 'icon-light'}`} />}
//       </div>

//   </div>
//   )
// };
import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'styled-icons/fa-solid';
import '../../toggler.css'

function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div>
      <h1>Hi! I am Rahul</h1>
      <div className="toggle-container" onClick={() => setDarkMode((prev) => !prev)}>
        <div className={`toggle-switch ${darkMode ? 'switch-right' : ''}`}></div>
        {darkMode 
          ? <Moon className="icon moon-icon" /> 
          : <Sun className="icon sun-icon" />}
      </div>
    </div>
  );
}

export default HomePage;
