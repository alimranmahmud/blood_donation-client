import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const MyRequest = () => {
    const [totalRequest, setTotalRequest]=useState(0)
    const [myRequest,setMyRequest]=useState([])
    const [itemPerPage,setItemPerPage]=useState(10)
    const [currentPage,setCurrentPage]=useState(1)
    const axiosSecure = useAxiosSecure()

useEffect(()=>{
axiosSecure.get(`/my-request?page=${currentPage-1}&size=${itemPerPage}`)
.then(res=>{
    setMyRequest(res.data.request)
    setTotalRequest(res.data.totalRequest)
})
},[axiosSecure, currentPage, itemPerPage])

const numberOfPage = Math.ceil(totalRequest/itemPerPage)
const pages = [...Array(numberOfPage).keys()].map(e=>e+1)

const handlePrev = ()=>{
   if(currentPage>1){
     setCurrentPage(currentPage-1)
   }
}
const handleNext = ()=>{
   if(currentPage>pages.length){
     setCurrentPage(currentPage+1)
   }
}

    return (
        <div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Hospital Name</th>
        <th>Blood Group</th>
      </tr>
    </thead>
    <tbody>
     
     {
        myRequest.map((request,index)=>{
             <tr>
        <th>{index+1}</th>
        <td>{request.recipient_name}</td>
        <td>{request.hospital_name}</td>
        <td>{request.blood_group}</td>
      </tr>
        })
     }


    </tbody>
  </table>
</div>
<div>
    <button onClick={handlePrev} className='btn'>Prev</button>
    {
        pages.map(page=>
            <button
            className={`btn ${page===currentPage ? 'bg-[#435585] text-white' : ''}`}
            onClick={()=>setCurrentPage(page)}>{page}</button>
        )
    }
    <button onClick={handleNext} className='btn'>Next</button>
</div>
        </div>
    );
};

export default MyRequest;