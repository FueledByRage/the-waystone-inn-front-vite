import React, { useState, useEffect } from "react";
import  Feed  from './Feed'
import api from '../../services/api'
import { Container, Main } from "./components";
import { getToken } from "../../storage/utils";
import SideMenu from "./SideMenu";



export default function HomePage(props){

    useEffect(()=>{
        if(!getToken()) window.location.href ='/login/'

        async function fetchData(){
            try {
                const communities = await api.get(`/communities`).catch((error)=>{
                    throw Error(error.response.data);
                });
                const communitiesArray = Array.from(communities.data);
                setData(communitiesArray);
                setLoading(false);
            } catch (error) {
                setLoading(false)
                setError(error.message);
            }
        }
        fetchData();
    },[])

    return(
        <Container>
            <Main>
                <Feed pageCount={1} />
            </Main>
            <SideMenu />
        </Container>
    )


}