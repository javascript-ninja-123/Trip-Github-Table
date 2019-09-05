import React from 'react';
import {Load} from './components'
import {TableComponent} from './containers'
import {UseFetchContext} from './hooks'
import './App.css';




const App = ()  => {
  const {state: {loading, error, data}, dispatch} = UseFetchContext()
  if(loading) return <Load/>
  if(error) return  <div>{`${error}`}</div>
  return (
    <div className="App">
       <TableComponent/>
    </div>
  );
}

export default App;
