// import React, { createContext, useState} from 'react'

// export const NavbarColorContext = createContext()
// export const NavbarContext = createContext()

// const NavContext = ({children}) => {

//   const [navOpen, setNavOpen] = useState(false)
//   return (
//     <div>
//         <NavbarContext.Provider value={[NavigationPreloadManager, setNavOpen]}>
//            {children}
//         </NavbarContext.Provider>
//     </div>
//   )
// }

// export default NavContext

// src/context/NavContext.jsx
import React, { createContext, useState } from 'react';

export const NavbarColorContext = createContext();
export const NavbarContext = createContext();

export default function NavProvider({ children }) {
  const [navOpen, setNavOpen] = useState(false);
  const [navColor, setNavColor] = useState('#36454F'); // default color you want

  return (
    <NavbarContext.Provider value={[navOpen, setNavOpen]}>
      <NavbarColorContext.Provider value={[navColor, setNavColor]}>
        {children}
      </NavbarColorContext.Provider>
    </NavbarContext.Provider>
  );
}

