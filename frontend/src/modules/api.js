import axios from 'axios'
const BASE_URL= 'localhost:8000/api/'
export default {
    student: {
        fetch_data: (credentials) =>
        axios.get('student', credentials ).then( res=> res.data )
    }
}