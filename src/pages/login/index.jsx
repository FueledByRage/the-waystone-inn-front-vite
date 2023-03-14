import api from "../../services/api";
import React, { useState } from "react";
import logo from '../../assets/beerIcon.png';
import { StyledLink } from "../Post/components";
import { ContainerLogin, StyledFormLogin, StyledInputLogin } from "./components";
import { setUserSession } from "../../storage/utils";
import './Login.css';



export default function Login(){
    const [ email, setEmail] = useState('');
    const [ password, setPassword ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);


    async function handleSubmit(event){
        event.preventDefault()
        
        if(email === '' || password === '') return setError('Missing credentials!')

        try{
            setLoading(true);
            const response = await api.post('/user/login', {email, password})

            const { username, token } = response.data
            
            setUserSession(token, username)

            window.location.href = '/'
        }catch(error){
            setError(error.response.data || error.message)
            setLoading(false)
        }
    }


    return(
        <ContainerLogin>
            <StyledFormLogin  onSubmit={handleSubmit}>
                <img src={logo}/>
                <StyledInputLogin 
                    id="email"
                    type="text"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required ='required'
                />
                <label id="label-email">Email</label>
                <StyledInputLogin 
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required ='required'
                />
                <label id="label-password">Password</label>

                <button disabled={loading} className="button" type="submit">Login</button>

                
                <StyledLink href='/register/' >Register</StyledLink>
                <div></div>
                {error && <><small style={{ color: 'red' }}>{ error }</small><br /></>}
            </StyledFormLogin>

        </ContainerLogin>
    );
}