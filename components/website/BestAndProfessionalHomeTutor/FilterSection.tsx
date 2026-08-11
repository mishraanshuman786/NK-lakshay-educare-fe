import React from 'react'
import { Input } from '@/components/ui/input';

const languages=["Hindi","English","Bangali","Punjabi","Marathi","Urdu","Others"];

const classes=[
  "Day Care At Home",
  "Pre-Schooler and Toddler",
  "CS Preparation",
  "CA Preparation",
  "CLAT",
  "IAS",
  "PCS",
  "SSC Banking",
  "MCA",
  "BCA",
  "MCOM",
  "BCOM",
  "MSC",
  "BSC",
  "KG",
  "Nursery",
  "Competitive Exam",
  "IIT JEE",
  "NEET Preparation",
  "Music",
  "Dance",
  "Yoga",
  "Language and Spoken",
  "Hobby Course",
];

const subjects=["Yoga","Dance & Music","Social Study","Others","Basic Learning Of Preschool","General Knowledge","Bengali","Commerce","French","Urdu","Hindi","Personal Trainer","Social Science","Computer & Software","Art & Drawing"];

const FilterSection = () => {
  return (
    <div>
       <div className='shadow-md p-2'>
        <Input placeholder='Name/Id/City/Pincode' className='rounded-md h-10 text-md border border-gray-700' />

       </div>
        

        {/* Language Search */}
        <div className='my-4'>
            <h4 className='text-xl my-1'>By Language</h4>
            {
                languages.map((language,index)=>{
                    return (
                        <div key={index} className='my-1'>
                            <input type='checkbox' /><label className='ml-1 text-gray-700'>{language}</label>
                        </div>
                    )

                })
            }
        </div>

        {/* Class Search */}
        <div className='my-4'>
            <h4 className='text-xl my-1'>By Class</h4>
            <div className='h-50 overflow-auto'>
            {
                classes.map((cl,index)=>{
                    return (
                        <div key={index} className='my-1'>
                            <input type='checkbox' /><label className='ml-1 text-gray-700'>{cl}</label>
                        </div>
                    )

                })
            }
            </div>
        </div>

        {/* Subject Search */}
        <div className='my-4'>
            <h4 className='text-xl my-1'>By Subject</h4>
            <div className='h-50 overflow-auto'>
            {
                subjects.map((subject,index)=>{
                    return (
                        <div key={index} className='my-1'>
                            <input type='checkbox' /><label className='ml-1 text-gray-700'>{subject}</label>
                        </div>
                    )

                })
            }
            </div>
        </div>



    </div>
  )
}

export default FilterSection;