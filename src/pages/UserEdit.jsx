import React, { useContext } from "react";
import { useForm} from "react-hook-form"

import { useLocation, useNavigate } from "react-router-dom";
import { UsersContext } from "../context/UsersContext";

export const UserEdit= ()=>{
    const location=useLocation();
    const {users,setUsers}=useContext(UsersContext);
    const navigate=useNavigate();
    const {id,name,email,city,suite,zipcode,street,username}=location.state;
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const onSubmit = (v) =>{ 
        let users2=users;
        for(let i of users2){
            if(i['id']==id){
                i['name']=v.name;
                i['email']=v.email;
                i['address']['city']=v.city;
                i['address']['street']=v.street;
                i['address']['zipcode']=v.zipcode;
                i['address']['suite']=v.suite;
            }
        }
        setUsers([...users2]);
        navigate('/')
      }
      
    return (
        <div className="bg-gray-200 h-screen">

          <div className="flex items-center justify-center text-3xl font-bold p-5">   
            <div>Edit {username} details</div>
          </div>
            
          <div className="flex items-center justify-center h-[80%] bg-gray-200">
        
            <form className="bg-white rounded-md  h-[80%] w-[70%]" onSubmit={handleSubmit(onSubmit)}>
    
              <div className="m-3 mt-10 flex items-center justify-center">
                <label className="w-[10%] m-2" htmlFor="name">Name:</label>
                <input className=" w-[70%] border border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400" defaultValue={name} {...register("name", { required: true })} />
                <div className="w-[20%] m-2">
                  {errors.name && <p className="text-red-500">Name field is empty</p>}
                </div>
              </div>

              <div className="m-3 flex items-center justify-center">
                <label className="w-[10%] m-2"htmlFor="Email">Email:</label>
                <input className="w-[70%] border border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400" defaultValue={email} {...register("email",{required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Enter a valid email address"
                  }   
                  })}/>
                <div className="w-[20%] m-2">
                  {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>
              </div>

              <div className="m-3 flex items-center justify-center">
                <label className="w-[10%] m-2" htmlFor="city">City:</label>
                <input className="w-[70%] border border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400" defaultValue={city} {...register("city",{ required: true })} />
                <div className="w-[20%] m-2">
                  {errors.city && <p className="text-red-500">City field is empty</p>}
                </div>
              </div>

              <div className="m-3 flex items-center justify-center">
                <label className="w-[10%] m-2" htmlFor="Street">Street:</label>
                <input className="w-[70%] border border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400" defaultValue={street} {...register("street",{ required: true })} />
                <div className="w-[20%] m-2">
                  {errors.street && <p className="text-red-500">Street field is empty</p>}
                </div>
              </div>

              <div className="m-3 flex items-center justify-center">
                <label className="w-[10%] m-2" htmlFor="Suite">Suite:</label>
                <input className="w-[70%] border border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400" defaultValue={suite} {...register("suite",{ required: true })} />
                <div className="w-[20%] m-2">
                  {errors.suite && <p className="text-red-500">Suite field is empty</p>}
                </div>
              </div>

              <div className="m-3 flex items-center justify-center">
                <label className="w-[10%] m-2" htmlFor="zipcode">ZipCode:</label>
                <input className="w-[70%] border border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400" defaultValue={zipcode} {...register("zipcode",{ required: true })} />
                <div className="w-[20%] m-2">
                  {errors.zipcode && <p className="text-red-500">Zipcode field is empty</p>}
                </div>
              </div>  

              <div className="m-1 flex items-center justify-center">
                <input className="m-10 bg-blue-300 rounded-md w-[30%]"type="submit" />
              </div>

            </form>
          </div>
        </div>
       
        
    )
}