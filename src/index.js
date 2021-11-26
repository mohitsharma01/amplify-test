import React from 'react';
import {render} from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";


import './index.css';
import GameSpace from './GameSpace';
import TodoGraphQL from './TodoGraphQL'
import ERROR from './Error'
  
  render(
    <BrowserRouter>
        <Routes>
            <Route path="/Gamespace" element={<GameSpace />} />
            <Route path="/todo" element={<TodoGraphQL />} />
            <Route path="/" element={<ERROR />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
  );
  