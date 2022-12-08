import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../../Shared/ConfirmationModal/ConfirmationModal";

const ManageDoctors = () => {
    const [deleteDoctor, setDeleteDoctor] = useState(null)
    const handleCloseModal = ()=>{
        setDeleteDoctor(null)
    }
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: () =>
      fetch("https://doctors-portal-server-omega-olive.vercel.app/doctors", {
        headers: {
          authorization: localStorage.getItem("doc_port_token"),
        },
      }).then((res) => res.json()),
  });
  const doctors = data?.data;
  console.log(doctors);
  if (isLoading) {
    return <div>loading...</div>;
  }

  const handleDelete = (doctor)=>{
    fetch(`https://doctors-portal-server-omega-olive.vercel.app/doctors/${doctor._id}`,{
        method:"DELETE",
        headers:{
            authorization : localStorage.getItem('doc_port_token')
        }
    })
    .then(res => res.json())
    .then(data => {
        if(data.success){
            toast.success(data.message)
            refetch()
        }else{
            toast.error(data.message)
        }
    })
  }
  return (
    <div className="ml-10">
      <h2>Manage Doctors</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <tr key={doctor._id}>
                <th>{index + 1}</th>
                <td>
                  <img
                    className="w-10 rounded-full"
                    src={doctor.image}
                    alt=""
                  />
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <label
                    htmlFor="confirmation-modal"
                    className="btn btn-xs text-white bg-red-700"
                    onClick={()=> setDeleteDoctor(doctor)}
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
         
        </table>
      </div>
      {
            deleteDoctor && 
            <ConfirmationModal
            title = "Are you sure to delete?"
            desc = "If you delete once, you wont be able to recover it."
            closemodal = {handleCloseModal}
            modalAction = {handleDelete}
            modalData = {deleteDoctor}
          />
          }
    </div>
  );
};

export default ManageDoctors;
