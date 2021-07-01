import axios from "axios";

export default function createHttp(){
  const http = axios.create({
    // baseURL:'https://semana-vue-spring-mycash.herokuapp.com/mycash'
    baseURL:'http://localhost:9090/mycash'
    })
    return http
}