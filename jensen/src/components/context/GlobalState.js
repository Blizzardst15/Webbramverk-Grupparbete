import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
  skolor: [],
  error: null,
  loading: true
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getSkolor() {
    try {
      const res = await axios.get('/api/skolor');

      dispatch({
        type: 'GET_SKOLOR',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'SKOLA_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function deleteSkola(id) {
    try {
      await axios.delete(`/api/skolor/${id}`);

      dispatch({
        type: 'DELETE_SKOLA',
        payload: id
      });
    } catch (err) {
      dispatch({
        type: 'SKOLA_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function addSkola(skola) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/skolor', skola, config);

      dispatch({
        type: 'ADD_SKOLA',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'SKOLA_ERROR',
        payload: err.response.data.error
      });
    }
  }

  return (<GlobalContext.Provider value={{
    skolor: state.skolor,
    error: state.error,
    loading: state.loading,
    getSkolor,
    deleteSkola,
    addSkola
  }}>
    {children}
  </GlobalContext.Provider>);
}