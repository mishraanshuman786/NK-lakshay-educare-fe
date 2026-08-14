import React from 'react'
import FilterSection from '@/components/website/BestAndProfessionalHomeTutor/FilterSection';
import TeacherCard from '@/components/website/BestAndProfessionalHomeTutor/TeacherCard';

const BestAndProfessionalHomeTutor = () => {
  return (
    <div>
         <div className="bg-background-lightblue py-14">
        <h1 className="text-center">Professional Home Tutors</h1>
        <h3 className="text-center">Home // All Tutor</h3>
      </div>

      <div className=' max-w-6xl mx-auto grid grid-cols-[1fr_3fr] gap-4 my-10'>
       <div className='shadow-lg h-225 p-4'>
         <FilterSection />
       </div>
        <div className='shadow-lg bg-gray-100  flex flex-col gap-4'>
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
        </div>

      </div>

      
    </div>
  )
}

export default BestAndProfessionalHomeTutor;