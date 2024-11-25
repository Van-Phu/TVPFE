import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {AppRoutes, Navbar} from '../src/components/components'

function App() {
  return (
    <div>
      <AppRoutes/>
    </div>

    // <div className='container-app'>
    //     <div className='layout-app'>
    //       <div className='navbar-area'>
    //         <Navbar />
    //       </div>

    //       <div className='rightContent'>
    //         <div className='titleApp'>
    //             Hello world
    //         </div>
    //         <div className='route-area'>
    //           <AppRoutes />
    //         </div>
            
    //       </div>
          
    //     </div>

    // </div>

  );
}

export default App;
