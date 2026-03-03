import { Star, EyeClosed } from 'lucide-react';
import { FaApple } from "react-icons/fa6";
import { FaMeta } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className='relative flex flex-col lg:flex-row min-h-screen bg-[#0B0F14] text-white overflow-hidden'>

      {/* Glow Background - Rainbow blob bottom-right */}
      <div className="absolute right-[-100px] top-[10%] w-[500px] h-[500px] rounded-full bg-[#0CC8A8] opacity-25 blur-[120px] pointer-events-none" />
      <div className="absolute right-[50px] bottom-[0px] w-[550px] h-[550px] rounded-full bg-orange-500 opacity-35 blur-[130px] pointer-events-none" />
      <div className="absolute right-[-80px] bottom-[-100px] w-[480px] h-[480px] rounded-full bg-red-600 opacity-30 blur-[150px] pointer-events-none" />




      {/* For the left side of the ui content */}
      <div className='w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-20 py-12 lg:py-0 z-10'>
        <h1 className="text-4xl font-semibold leading-tight">
          Expert level Cybersecurity <br />
          in <span className="text-[#0CC8A8]">hours</span> not weeks.
        </h1>

        <p className="mt-6 text-gray-400 text-sm">
          What’s included
        </p>

        <ul className="mt-4 space-y-3 text-gray-300 text-sm">
          <li>✔ Effortlessly spider and map targets to uncover hidden security flaws</li>
          <li>✔ Deliver high-quality, validated findings in hours, not weeks.</li>
          <li>✔ Generate professional, enterprise-grade security reports automatically.</li>
        </ul>

        <div className='mt-24'>
          <div className='flex flex-row gap-1 items-center'>
            <Star fill='#0CC8A8' stroke='0.5px' size={14} />
            <span className='text-white'>TrustPilot</span>
          </div>
          <div className='flex items-center gap-2 mt-1.5'>
            <span className='text-lg'>Rated 4.5/5.0</span>
            <span className='text-[10px] text-gray-300'>{`(100k+ reviews)`}</span>
          </div>
        </div>
      </div>


      {/* For the right side of the ui content */}

      <div className='w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-0 pb-12 lg:pb-0 z-10'>

        <div className="bg-white text-black w-full max-w-[420px] rounded-2xl p-8 shadow-2xl">
          <h2 className="text-2xl font-semibold text-center">Sign up</h2>

          <p className="text-sm text-black text-center mt-2">
            Already have an account?
            <span className="text-[#0CC8A8] cursor-pointer ml-1 underline">Log in</span>
          </p>

          <div className="mt-6 flex flex-col gap-4">
            <input className="w-full border border-black/30 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#0CC8A8] focus:border-[#0CC8A8] transition" placeholder="First name*" />
            <input className="w-full border border-black/30 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#0CC8A8] focus:border-[#0CC8A8] transition" placeholder="Last name*" />
            <input className="w-full border border-black/30 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#0CC8A8] focus:border-[#0CC8A8] transition" placeholder="Email address*" />
            <div className="relative">
              <input
                type="password"
                className="w-full border border-black/30 rounded-lg px-4 py-3 text-sm pr-10 outline-none focus:ring-2 focus:ring-[#0CC8A8] focus:border-[#0CC8A8] transition"
                placeholder="Password (8+ characters)*"
              />
              <EyeClosed
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
              />
            </div>
          </div>

          {/* Checkbox content */}

          <div className='mt-4 text-sm'>
            <label>
              <input type="checkbox" name="" id="" /> I agree to Aps's <span className='text-blue-600 underline cursor-pointer accent-[#0CC8A8] mr-1'>Terms & Conditions</span> and acknowledge the <span className='text-blue-600 underline cursor-pointer'>Privacy Policy</span>
            </label>
          </div>

          <div>
            <button className="w-full mt-6 bg-[#0CC8A8] text-white py-2.5 rounded-4xl font-medium hover:opacity-90 cursor-pointer" onClick={() => navigate("/dashboard")}
            >
              Create account
            </button>
          </div>

          {/* Apple Google and meta buttons and tehir icons */}

          <div className='flex flex-row justify-between mt-3.5 gap-1.5'>
            <button className='flex-1 flex justify-center items-center bg-black py-3 rounded-full hover:opacity-90'>
              <FaApple size={22} fill='white' />
            </button>
            <button className='flex-1 flex justify-center items-center bg-gray-200 py-3 rounded-full hover:opacity-90'>
              <svg width="22" height="22" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-3.58-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                <path fill="none" d="M0 0h48v48H0z" />
              </svg>
            </button>
            <button className='flex-1 flex justify-center items-center bg-blue-700 py-3 rounded-full hover:opacity-90'>
              <FaMeta size={22} fill='white' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
