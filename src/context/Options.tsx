import React, { createContext, useState } from 'react';  

interface IProviderOptionsMenu {
  getter: boolean,
  setter: React.Dispatch<React.SetStateAction<boolean>>
}

export const OptionsMenuContext = createContext<IProviderOptionsMenu>({
  getter: false,
  setter: () => {}
});

export const OptionsMenuProvider: React.FC = ({ children }) => {

  const [ MenuIsOpen, setMenuIsOpen ] = useState(false);

  return(
    <OptionsMenuContext.Provider value={{
      getter: MenuIsOpen,
      setter: setMenuIsOpen
    }}>
      {children}
    </OptionsMenuContext.Provider>
  );
}