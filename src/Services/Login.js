import axios from "axios";




export async function login(email, password) {
    return axios.get('https://jsonplaceholder.typicode.com/users',
        {

            email: email,
            password: password

        })
        .then((res) => res.status)
}