import api from '../modules/api'

export const UPDATE_STUDENT_BEGIN   = 'UPDATE_STUDENT_BEGIN';
export const UPDATE_STUDENT_SUCCESS = 'UPDATE_STUDENT_SUCCESS';
export const UPDATE_STUDENT_FAILURE = 'UPDATE_STUDENT_FAILURE';

export const updateStudentBegin = () => ({
  type: UPDATE_STUDENT_BEGIN
});

export const updateStudentSuccess = student => ({
  type: UPDATE_STUDENT_SUCCESS,
  payload: { student }
});

export const updateStudentFailure = error => ({
  type: UPDATE_STUDENT_FAILURE,
  payload: { error }
});

export function updateStudent(data) {
    console.log('post ',JSON.stringify(data))
    return dispatch => {
      dispatch(updateStudentBegin());
      return fetch("http://localhost:8888/api/student", {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify(data)
      })
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(updateStudentSuccess(json.student));
          return json.student;
        })
        .catch(error => dispatch(updateStudentFailure(error)));
    };
  }
  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }