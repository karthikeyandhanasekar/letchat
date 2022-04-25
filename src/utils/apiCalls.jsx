import axios from 'axios'

const baseurl = `http://localhost:5000`


export const userregister = async ({ username, email ,password}) => {
    console.log(username,email);
    return  axios.post(`${baseurl}/userregister`, { username, email,password }).then(res=>res.data).catch(err=>console.error(err.message))
}

export const userlogin = async ({ username ,password}) => {
    return  axios.post(`${baseurl}/userlogin`, { username,password }).then(res=>res.data).catch(err=>console.error(err.message))
}