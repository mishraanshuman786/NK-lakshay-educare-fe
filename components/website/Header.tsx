import { Button } from "../ui/button"

const Header = () => {
  return (
    <header className='w-full text-white'>
        {/* top header */}
       <div className='bg-background-secondary '>
        <div className='max-w-6xl  mx-auto flex justify-between items-center '>
           <h3>Welcome To NK Lakshay Educare</h3>
           <div className='flex'>
            <button className='p-2 hover:bg-background-primary'>Login</button>
            <div className=' border border-white'></div>
            <button className='p-2 hover:bg-background-primary'>Register</button>
           
           </div>
        </div>

       </div>
       {/* bottom header */}
       <div className="bg-white border border-red-500 ">
       <nav className="max-w-6xl h-16 font-semobold text-md mx-auto flex justify-between items-center text-black ">
        <div>
         Company Logo
        </div>
        
            <ul className="flex gap-4 text-md ">
                <li className="hover:text-background-secondary">Home</li>
                <li className="border border-gray-300 "></li>
                <li className="hover:text-background-secondary">About Us</li>
                <li className="border border-gray-300 "></li>
                <li className="hover:text-background-secondary">Book Demo</li>
                <li className="border border-gray-300"></li>
                <li className="hover:text-background-secondary">TImeline & Blogs</li>
                <li className="border border-gray-300"></li>
                <li className="hover:text-background-secondary">All Tutor</li>
                <li className="border border-gray-300"></li>
                <li className="hover:text-background-secondary">How It Works</li>
                <li className="border border-gray-300"></li>
                <li className="hover:text-background-secondary">Contact</li>
            </ul>

       
        <div>
         <Button size="lg" className="bg-background-primary text-md font-semibold rounded-4xl p-4">Pay Now</Button>
        </div>

       </nav>
       </div>
    </header>
  )
}

export default Header