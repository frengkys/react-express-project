import api from '../modules/api'

export const STATUS_STUDENT_BEGIN   = 'STATUS_STUDENT_BEGIN';
export const STATUS_STUDENT_SUCCESS = 'STATUS_STUDENT_SUCCESS';
export const STATUS_STUDENT_FAILURE = 'STATUS_STUDENT_FAILURE';

export const statusStudentBegin = () => ({
  type: STATUS_STUDENT_BEGIN
});

export const statusStudentSuccess = status => ({
  type: STATUS_STUDENT_SUCCESS,
  payload: { status }
});

export const statusStudentFailure = error => ({
  type: STATUS_STUDENT_FAILURE,
  payload: { error }
});

export function statusStudent(data) {
    console.log('post ',JSON.stringify(data))
    return dispatch => {
      dispatch(statusStudentBegin());
      return fetch("http://localhost:8888/api/student/student-status")
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(statusStudentSuccess(json.status));
          return json.status;
        })
        .catch(error => dispatch(statusStudentFailure(error)));
    };
  }
  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }