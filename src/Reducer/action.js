import { SET_JOB, ADD_JOB, DELETE_JOB, EDIT_JOB, UPDATE_JOB, SEARCH_JOB } from './constants.js';

export const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload
  }
}

export const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload
  }
}

export const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload
  }
}

export const editJob = (payload) => {
  return {
    type: EDIT_JOB,
    payload
  }
}

export const updateJob = (payload) => {
  return {
    type: UPDATE_JOB,
    payload
  }
}

export const searchJob = (payload) => {
  return {
    type: SEARCH_JOB,
    payload
  }
}