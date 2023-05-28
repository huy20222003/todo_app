import { SET_JOB, ADD_JOB, DELETE_JOB, EDIT_JOB, UPDATE_JOB, SEARCH_JOB } from './constants.js';

//initial state
export const initState = {
  job: '',
  jobs: [],
  jobsList: []
}

//reducer
const reducer = (state, action) => {
  switch(action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload
      }
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, 
          action.payload],
        jobsList: [...state.jobs,
                  action.payload]
      }
    case DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      return {
        ...state,
        jobs: newJobs,
        jobsList: newJobs
      }
    case EDIT_JOB:
      return {
        ...state,
        job: action.payload
      }
    case UPDATE_JOB: 
      state.jobs.forEach((item, index)=>{
        if(index === action.payload.id){
          state.jobs[index] = action.payload.content;
        }
      });
      return {
        ...state
      }
    case SEARCH_JOB: 
      let newJobSearch = state.jobs.filter((item)=>{
        item = item.toLowerCase();
        return item.includes(action.payload.toLowerCase());
      });
      return {
        ...state,
        jobsList: newJobSearch
      }
    default:
      throw new Error("Invalid input");
  }
}

export default reducer;