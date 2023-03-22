import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { FiCalendar } from 'react-icons/fi';
import { StyledAvatar } from "../../components/UploadAvatar/StyledAvatar";
import { AlertBox } from "../../components/Alert";
import Modal from "../../components/modal";
import { EditProfile } from "../EditProfile/editProfile";
import { Created, Profile } from './components';
import Loading from "../../components/Loading";
import { getToken } from "../../storage/utils";

export default function ProfilePage(props){
    
    const urlParams = new URLSearchParams(window.location.search);
    const user = urlParams.get("user");
    const [ error, setError ] = useState(null);
    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ showModal, setShowModal ] = useState(false);

    useEffect(()=>{
        async function fetchData(){
            try {
                const response = await api.get(`/user/${user}`);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.message || 'Something went wrong')   
                setLoading(false)
            }
        }
        fetchData();
    }, []);

    function getDate(date){
        const newDate = new Date(date);

        return `${newDate.getDay()}/${newDate.getMonth()}/${newDate.getFullYear()}`
    }

    function closeModal(){
        setShowModal(false);
    }

    if(!getToken()) window.location.href = '/login';


    return(
        loading ? <div className ="container-loading">
            <Loading />
        </div> :
        <div>
            {
                error ? <div> <AlertBox><span>{error}</span></AlertBox> </div>  : 
                <Profile>
                    <StyledAvatar src={data.profileURL}/>
                        <div onClick={()=> setShowModal(true)} > <span>Editar</span> </div> 
                        <h1>{data.user}</h1>
                        <h3>{data.name}</h3>
                    <Created><span><FiCalendar /> Joined: {getDate(data.date)}</span></Created>
                </Profile>
            }
            {(!error && !loading && showModal ) &&         
                <Modal show={showModal} close={closeModal}>
                    <EditProfile profileURL={props.profileURL} />
                </Modal> 
            }
                
        </div>
    )

}