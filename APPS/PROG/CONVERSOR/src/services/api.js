import axios  from "axios";

//https://free.currconv.com/api/v7/
//convert?q=USD_BRL&compact=ultra&apiKey=d48954d639a1044d70b3

const api = axios.create({
    baseURL:'https://free.currconv.com/api/v7/'
});

export default api;