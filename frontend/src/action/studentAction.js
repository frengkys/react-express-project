import api from '../modules/api'

export const FETCH_STUDENTS_BEGIN   = 'FETCH_STUDENTS_BEGIN';
export const FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENTS_SUCCESS';
export const FETCH_STUDENTS_FAILURE = 'FETCH_STUDENTS_FAILURE';

export const fetchStudentsBegin = () => ({
  type: FETCH_STUDENTS_BEGIN
});

export const fetchStudentsSuccess = students => ({
  type: FETCH_STUDENTS_SUCCESS,
  payload: { students }
});

export const fetchStudentsFailure = error => ({
  type: FETCH_STUDENTS_FAILURE,
  payload: { error }
});

export function fetchStudents() {
    return dispatch => {
      dispatch(fetchStudentsBegin());
      return fetch("http://localhost:8888/api/student")
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchStudentsSuccess(json.student));
          return json.student;
        })
        .catch(error => dispatch(fetchStudentsFailure(error)));
    };
  }
  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }