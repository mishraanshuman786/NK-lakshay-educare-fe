import React from 'react'

const TeacherCard = () => {
  return (
    <div className='grid grid-cols-[1fr_3fr] gap-4 bg-white px-6 py-4'>
        <div>
            <img src="./profile.png" alt='profile-pic'  />
        </div>
        <div>
            <div className='flex gap-2 mb-1'>
                <h2>Maahi Mehta</h2>
                <h5>(Persuing Graduation)</h5>
            </div>
            <div className='bg-background-secondary p-1 text-white'>
                <h2>Course/Class: 12th,11th,10th,9th,8th,7th,6th,5th,4th,3rd,2nd,KG,Nursery</h2>

            </div>
            <div className='grid grid-cols-2 grid-rows-3 gap-2 text-[12px]'>
                <h3>Class Mode: Online/Offline</h3>
                <h3>Subject: English, Business Study, Social Science</h3>
                <h3>Language: Hindi/English</h3>
                <h3>Experince: 5 Years</h3>
                <h3>Preferred Area: 211002</h3>
                <h3>City: Prayagraaj</h3>
            </div>
            <div>
                <h3 className='cursor-pointer text-black font-semibold'>View More </h3>
            </div>
        </div>
        
    </div>
  )
}

export default TeacherCard