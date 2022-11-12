import React from 'react'

const InfoCard = ({data}) => {
  return (
    <div className={`flex ${data.bg} gap-5 px-6 py-12 rounded-xl text-white`}>
        <div>
            <img src={data.icon} alt="" />
        </div>
        <div>
            <h3>{data.title}</h3>
            <p>{data.desc}</p>
        </div>
    </div>
  )
}

export default InfoCard