import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {

    const [loading, setLoading] = useState(false);

    const handleSignIn = async () => {
      setLoading(true);
  
      // Sign in with Google code here
  
      setLoading(false);
    };  

    return ( 
        <div className="signup h-screen flex flex-col justify-center items-center mobile:mx-6">
            <div className="signup_container laptop:w-1/3">
                <div className="signup_header mb-6">
                    <h1 className="text-5xl mb-2">signup</h1>
                    <p className="text-xl">Start turning your ideas into reality</p>
                </div>
                <div className="signup_symbols w-full mb-6">
                    <div className="signup_symbol1 flex flex-row justify-center bg-white p-2 cursor-pointer border border-gray-400 rounded-sm">
                        {/* <img className='w-10 h-10' src="../assets/Google__G__Logo.svg" alt="Google" /> */}
                        <p className=''>Sign in with Google</p>
                    </div>
                </div>
                <div className="seperator flex flex-row justify-between items-center">
                    <div className="seperator_line h-px bg-gray w-full mr-3"></div>
                    <div>
                        <p className="seperator_text text-gray-400">or</p>
                    </div>
                    <div className="seperator_line h-px bg-gray w-full ml-3"></div>
                </div>
                <div className="signup_form w-full mt-4">
                    <form className="flex flex-col">
                        <div className="form_group mb-4 flex flex-col">
                            <label className="form_label mb-1" htmlFor="name">Name</label>
                            <input className="form_input p-2 rounded-sm border border-slate-400 outline-none" type="name" name="name" id="name" />
                        </div>
                        <div className="form_group mb-4 flex flex-col">
                            <label className="form_label mb-1" htmlFor="email">Email</label>
                            <input className="form_input p-2 rounded-sm border border-slate-400 outline-none" type="email" name="email" id="email" />
                        </div>
                        <div className="form_group mb-8 flex flex-col">
                            <label className="form_label mb-1" htmlFor="password">Password</label>
                            <input className="form_input p-2 rounded-sm border border-slate-400 outline-none" type="password" name="password" id="password" />
                        </div>
                        <div className="form_group mb-6">
                            <button className="form_button bg-buttoncolor py-3 rounded-sm w-full text-white font-medium" >signup</button>
                        </div>
                    </form>
                </div>
                <div className="seperator_line h-px bg-gray w-full mt-2"></div>
                <div className='signup_footer mt-6 text-center'>
                    <p>Don't have an account? <Link to={'/login'} className='text-buttoncolor'>Log in</Link></p>
                </div>
            </div>
        </div>
        
     );
}
 
export default Signup;