import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  const imgHostingApiKey = process.env.REACT_APP_imgHostingApiKey;
    console.log(imgHostingApiKey)

  const handleAddDoctor = (data) => {
    const {name,email,specialty,img} = data;
    const imgFile = img[0];
    console.log(imgFile)
    const formData = new FormData()
    formData.append("image",imgFile)
    const url = `https://api.imgbb.com/1/upload?key=${imgHostingApiKey}`
    
    fetch(url,{
      method:"POST",
      body: formData
    })
    .then(res => res.json())
    .then(imgData => {
      if(imgData.success){
        const doctor = {
          name,
          email,
          specialty,
          image: imgData.data.display_url
        }

        fetch('http://localhost:5000/doctors',{
          method: "POST",
          headers:{
            "content-type" : "application/json",
            authorization : localStorage.getItem('doc_port_token')
          },
          body: JSON.stringify(doctor)
        })
        .then(res => res.json())
        .then(data => {
          if(data.success){
            toast.success(data.message)
            navigate('/dashboard/manageDoctors')
          }
        })
      }
    })
    .catch(err => console.log(err))
  };

  const {data ={},isLoading} = useQuery({
    queryKey : ['appointmentSpeciality'],
    queryFn: ()=> fetch('http://localhost:5000/appointmentSpeciality').then(res => res.json())
    
  })
  const specialties = data?.data;
  
  if(isLoading){
    return <div>Loading...</div>
  }
  return (
    <div className="ml-10 mt-8">
      <h2 className="text-2xl">Add A Doctor</h2>
      <div className=" ">
        <div className="w-96 shadow-xl p-6 rounded-xl">
          <h3 className="text-2xl text-center mb-7">Login</h3>
          <form className="w-full" onSubmit={handleSubmit(handleAddDoctor)}>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: "Email Address is required",
                })}
                type="email"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Speciality</span>
              </label>
              <select {...register("specialty")} className="select select-bordered w-full max-w-xs">
                {
                  specialties.map(specialty => <option key={specialty._id}>{specialty.name}</option>)
                }
               
              </select>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                {...register("img", {
                  required: "Imgage upload is required",
                })}
                type="file"
                className="input input-bordered w-full"
              />
            </div>
            <button type="submit" className="btn btn-accent w-full mt-4">
              Add 
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
