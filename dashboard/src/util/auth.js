const authToken = `authToken`;
const server = `http://192.168.0.17:8080/`;
const API_KEY = `826541211dde43c0a633a4cca83e01fc`;

export const isAuthenticated = async () => {

    const token = localStorage.getItem(authToken);
    
    if(!token){
        // Se não existir o token no LocalStorage,
        return false;
    }

    if(!token.split()[0] === "Bearer"){
        // Verifica se existe o Bearer token.
        console.log(`Token incorreto! Por favor, verifique suas credenciais`);
        return false;
    }

    if(token){
        return true;
    }
    
}

export const Logout = async () => {

    localStorage.removeItem(authToken);
    
}

export const Login = async (token) => {

    console.log(`Enviando credenciais ao servidor.`);
    
    try { 
        const response = await fetch(`${server}`);
        const token = await response.json();
        return(token);


    } 
    catch(err){
        console.group("DadJoke");
        console.error(`DadJoke: ${err}`)
        console.groupEnd();
    }
    
}