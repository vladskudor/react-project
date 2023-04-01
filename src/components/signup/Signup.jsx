import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './signup-styles.css';
import List from './List';

export default function Signup() {

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        console.log(user);
        console.log(password);
    }, [email, password]);

    async function sendData() {
        let data = {
            email: email,
            password: password,
            weight: user.weight
        };
        try {
            localStorage.setItem('user', JSON.stringify(data));
            await axios.post(`http://localhost:9000/exercises`, {body: data});
        } catch (err) {
            console.log(err);
        }
    }

    async function sendWeight() {
        let dataOf = {
            email: user.email,
            password: user.password,
            weight: '70'
        };
        try {
            await axios.put(`http://localhost:9000/exercises/`, {body: dataOf});
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div>
            <form action="">
                <h1 onClick={sendWeight}>Signup</h1>
                <label htmlFor="email">
                    Email
                    <input type="text" placeholder='Enter email' value={email}
                           onChange={(e) => setEmail(email = e.target.value)} id='email'/>
                </label>
                <label htmlFor="password">
                    Password
                    <input type="text" placeholder='Enter password' value={password}
                           onChange={(e) => setPassword(password = e.target.value)} id='password'/>
                </label>
                <label htmlFor="">
                    <input type="submit" onClick={sendData} value={'send'}/>
                </label>
                <div style={{color: 'red' , fontSize: '30px'}}>
                    <List />
                </div>
            </form>
        </div>
    )
}
