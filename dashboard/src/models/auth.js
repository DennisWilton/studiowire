import {query, post, API_HOST} from './database';
import axios from 'axios';

const ERR = 'models/user \n>>';

export const Login = async (credentials) => {
    return new Promise(async (res, rej) => {
        if(!credentials.email.value || !credentials.password.value){
            if(!credentials.email.value && !credentials.password.value) {
                rej({message: "Por favor, insira o e-mail e a senha."});
            }
            
            if(!credentials.email.value) {
                rej({message: "Por favor, insira o e-mail."})
            }
            if(!credentials.password.value) {
                rej({message: "Por favor, insira a senha."})
            }
        } else {
            
            const user = await axios.post(`${API_HOST}/admin/auth/login`, {email: credentials.email.value, password: credentials.password.value});
            res(user.data);
        }
    })
}