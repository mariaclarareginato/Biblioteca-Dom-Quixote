// app/contexts/BuscaContext.js
'use client';
import { createContext, useContext, useState } from 'react';

const BuscaContext = createContext();

export const BuscaProvider = ({ children }) => {
  const [busca, setBusca] = useState('');

  return (
    <BuscaContext.Provider value={{ busca, setBusca }}>
      {children}
    </BuscaContext.Provider>
  );
};

export const useBusca = () => useContext(BuscaContext);
