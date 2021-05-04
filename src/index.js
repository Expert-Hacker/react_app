import react from 'react';
import reactdom from 'react-dom';
import Funn from './Funn';
import './index.css';

import {BrowserRouter} from 'react-router-dom';


reactdom.render(
   <>
<BrowserRouter>
<Funn/>
</BrowserRouter>
  

   
   </>
   ,document.getElementById('root')
);