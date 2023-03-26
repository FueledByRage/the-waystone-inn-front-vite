import React, { useState } from 'react';
import { getToken } from '../../storage/utils';
import api from '../../services/api';
import Upload from '../../components/Upload';
import { DropContainer } from '../../components/Upload/DropContainer';
import { StyledForm, StyledInput, StyledButton } from './components';


export default function FormPost() {

    const token = getToken();
    const [ file, setFile ] = useState(null);
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ error, setError ] = useState();
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");


    async function handleSubmit(e){
        e.preventDefault();

        if(title == '' || body == '' ) return setError('Post fields cannot be empty!');

        const formData = new FormData();
        formData.append('title', title);
        formData.append('body', body);
        formData.append('id', id);
        formData.append('file', file);

        
        if(!token) return setError("You must be logged to post something!");

        try {
            const response = await api.post('/post/register', formData)
            .catch((error) =>{ throw error });
            if(response.data) window.location.href = `/post/?id=${response.data._id}`;
            else throw new Error('Error saving post');
        } catch (error) {
            setError(error.message);
        }
    }

    function handleFile(files){ setFile(files[0]) }

  return (
    <>
        <StyledForm onSubmit={handleSubmit}>
            <StyledInput 
                type='text'
                placeholder='Title'
                onChange = {(e) => setTitle(e.target.value)}
            />

            <StyledInput
                rows='5'
                placeholder='Body'
                onChange = { (e)=>setBody(e.target.value)}
            />
                            
            {file ? <DropContainer> { file.name } </DropContainer> : <Upload onUpload={handleFile}/>}
                            
            <StyledButton className='button' >Post</StyledButton>
            {
                error && <small style={{  color : 'red'}} className='small-error'>{ error }</small>
            }
            
        </StyledForm>        
    </>
  )
}
