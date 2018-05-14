import api from '../modules/api'

export const CREATE_STUDENT_BEGIN   = 'CREATE_STUDENT_BEGIN';
export const CREATE_STUDENT_SUCCESS = 'CREATE_STUDENT_SUCCESS';
export const CREATE_STUDENT_FAILURE = 'CREATE_STUDENT_FAILURE';

export const createStudentBegin = () => ({
  type: CREATE_STUDENT_BEGIN
});

export const createStudentSuccess = student => ({
  type: CREATE_STUDENT_SUCCESS,
  payload: { student }
});

export const createStudentFailure = error => ({
  type: CREATE_STUDENT_FAILURE,
  payload: { error }
});

export function createStudent(data) {
    console.log('post ',JSON.stringify(data))
    return dispatch => {
      dispatch(createStudentBegin());
      return fetch("http://localhost:8888/api/student", {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
      })
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(createStudentSuccess(json.student));
          return json.student;
        })
        .catch(error => dispatch(createStudentFailure(error)));
    };
  }
  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }