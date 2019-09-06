import {query, post, API_HOST} from './database';
import axios from 'axios';

const ERR = 'models/user \n>>';

export const getAll = async (offset, token) => {

    try {
        console.log(token);
        const result = await axios.post(`${API_HOST}/admin/auth`, { limit: 10, offset, token});
        return result;
    } catch (err) {
        console.error(`${ERR} Erro ao carregar a lista de usuários.\n\n${err}`)
        return [];
    }
}

export const count = async () => {
    try{
        const result = await axios.post(`${API_HOST}/admin/auth`);
        return result.data.length;
    } catch (err) {
        console.error(`${ERR} Erro ao contar os usuários. \n ${err}`)
    }
}

export const create = async (credentials) => {
    if(!credentials){
        console.error(`${ERR}\nCredentials not found!`)
        return false;
    }

    if(!credentials.name || !credentials.password || !credentials.email){
        console.error(`${ERR}\nCredenciais insuficientes.`)
        return false;
    }
    
    if(credentials.name !== "" && credentials.password !== "" && credentials.email !== ""){
        const result = await post('admin/auth/create', credentials);
        return result;
    }
    
    return false;
}

export const remove = async (userId) => {
    const removedUser = await axios.post(`${API_HOST}/admin/auth/remove`, {id: userId});
    
    if(!removedUser.data.status) {
        return false
    }

    if(removedUser.data.status) {
        return true;
    }

}

export const find = async (userId) => {
    try {
        const selectedUser = await axios.post(`${API_HOST}/admin/auth/user/${userId}`);
        if(selectedUser && selectedUser.data && selectedUser.data.length >= 1){
            return selectedUser;
        }
    } catch (err){
        console.error(`${ERR} ${err.message}`);
    }

    if(!userId){
        return false;
    }
    
}