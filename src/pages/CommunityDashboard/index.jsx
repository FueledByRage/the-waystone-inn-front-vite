import React, { useState, useEffect } from "react";
import { Dashboard, DashboardContainer, DashboardItem } from "./components";
import api from "../../services/api";
import { getToken } from "../../storage/utils";


export default function CommunityDashboard(){
    const [ data, setData ] = useState([]);
    const [ error, setError] = useState(null);
    
    useEffect(()=>{
        const fetchData = async () =>{
            const response = await api.get(`/communities`).catch( e => setError(e.data))

            setData(response.data);
        }
    },[]);

    if(!getToken()) window.location.href ='/login'


    return(
        <DashboardContainer>
            <Dashboard>
                <DashboardItem>
                    <span>Community name</span>
                    <span>00/00/0000</span>
                    <div>
                        X
                        +
                    </div>
                </DashboardItem>
            </Dashboard>
        </DashboardContainer>
    );
}