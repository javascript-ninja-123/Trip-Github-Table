import React from 'react';
import {sortingHelper} from '../utils'


const UseFetchContextDefault = React.createContext()

const reducer = (state, action) => {
    switch(action.type){
        case UseFetchContext.types.START:
          return {...state, loading: true}
        case UseFetchContext.types.ADD:
          return {...state, data: action.payload, loading: false}
        case UseFetchContext.types.ERROR:
          return {...state, loading: false, error: action.payload}
        case UseFetchContext.types.SORT:
            let newData = [...state.data]
          if(!state.sortToggle){
            newData = sortingHelper({array: newData, order:"down", type: action.payload})
          }
          else{
            newData = sortingHelper({array: newData, order:"up", type: action.payload})
          }
         return {...state, data: newData, sortToggle: !state.sortToggle}
        default:
          return state
    }
  }
  
  
 const useFetch = (url) => {
    const initialState = {data: [], loading:false, error:null, sortToggle: false} 
     const [state, dispatch] = React.useReducer(reducer, initialState) 
     React.useEffect(() => {
      const f = async () => {
          try{
            dispatch({type: UseFetchContext.types.START})
            const res = await fetch(url)
            const data = await res.json();
            dispatch({type: UseFetchContext.types.ADD, payload: data})
         }catch(err){
            dispatch({type: UseFetchContext.types.ERROR, payload: err})
         }
        }
        f()
     },[url])
     const value = React.useMemo(() => ({state, dispatch}), [state])
     return value
  }
  




export const UseFetchProvider = ({url, children}) => {
  const value = useFetch(url)
  return (
    <UseFetchContextDefault.Provider value={value}>
      {children}
    </UseFetchContextDefault.Provider>
  )
}

export const UseFetchContext = () => {
  const context = React.useContext(UseFetchContextDefault)
  if(!context) throw new Error("cannot use UseFetchContextDefault")
  return context
}
  

UseFetchContext.types = {
  START:"start",
  ADD:'add',
  RESET:'reset',
  ERROR:'error',
  SORT:"sort"
}