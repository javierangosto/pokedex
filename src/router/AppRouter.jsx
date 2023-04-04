import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PokedexApp } from '../PokedexApp';

export function AppRouter() {
  return (
    <Routes>
        <Route path="/" element={<PokedexApp />} />
        <Route path="/pokemon/:id" element = {<PokedexApp />} />
    </Routes>
  );
}