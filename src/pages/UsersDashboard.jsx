import React, { useContext, useState } from "react";
import axios from 'axios';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { set } from "react-hook-form";
import { UsersContext } from "../context/UsersContext";

export const UsersDashboard= ()=>{
    const {users,setUsers}=useContext(UsersContext);
    const navigate=useNavigate();
   
    return (
        <div className="bg-gray-200">

            <div className="flex items-center justify-center">
                <div className="text-3xl font-bold m-3">Users Dashboard</div>
            </div>

            <div className="flex items-center justify-center ">
                <div className="w-[50%] bg-white rounded-md " >
            
            {   
               
                users?.map((value)=>{
                    return <div key={value.index} className="bg-gray-100 hover:shadow-md flex items-center m-3 rounded-md" onClick={()=>{
                        navigate("\edit",{state:{id:value.id,name:value.name,email:value.email,street:value.address.street,suite:value.address.suite,zipcode:value.address.zipcode,city:value.address.city,username:value.username}});
                    }}>
                        <div className="m-3 w-[50%] flex items-center justify-center font-bold">
                          Username:  {value.username}
                        </div>

                        <div>
                            <div className="m-3">Name: {value.name}</div>
                            <div className="m-3">PhoneNo: {value.phone}</div>
                            <div className="m-3">Email: {value.email}</div>
                            <div className="m-3">City: {value.address.city}</div>
                            <div className="m-3">Street: {value.address.street}</div>
                            <div className="m-3">Suite: {value.address.suite}</div>
                            <div className="m-3">Zipcode: {value.address.zipcode}</div>
                        </div>
                            
                    </div>
                })
            }
                </div>
            </div>
        </div>
    )
}