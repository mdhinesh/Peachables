import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { loginEmailPassword, monitorAuthState } from '../auth/config';

export const Login = () => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignIn = async () => {
      setLoading(true);
  
      // Sign in with Google code here
  
      setLoading(false);
    };  

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const email = event.currentTarget.email.value;
        const password = event.currentTarget.password.value;
        // set the email and password to empty strings
        event.currentTarget.email.value = '';
        event.currentTarget.password.value = '';
        try {
          await loginEmailPassword(email, password);
          navigate("/");
          // account created successfully, navigate to the dashboard or home page
        } catch (error) {
          // handle error here or display it on the login form
          console.log(error);
          alert(error);
        }
    };  

    const showLoginState = (user: any) => {
        console.log(`You're logged in as ${user.displayName} (uid: ${user.uid}, email: ${user.email}) `);
        navigate("/");
    }
      
    useEffect(() => {
        // Call the `monitorAuthState` function in the `useEffect()` hook
        monitorAuthState(showLoginState);
      }, []);
    

    // useEffect(() => {
        // if(monitorAuthState() === true)
        // const unsubscribe = monitorAuthState((user: any) => {
        //     if (user) {
        //         navigate("/");
        //     }
        //     else {
        //         navigate('/login');
        //     }
        // });
        // return () => unsubscribe;
    // }, [])

    return ( 
        <div className="login h-screen flex flex-col justify-center items-center">
            <div className="login_container laptop:w-1/3">
                <div className="login_header mb-6">
                    <h1 className="text-5xl mb-2">Login</h1>
                    <p className="text-xl">Welcome back! Enter your email and password below to Log in.</p>
                </div>
                <div className="login_symbols w-full mb-6">
                    <div className="login_symbol1 flex flex-row justify-center bg-white p-2 cursor-pointer border border-gray-400 rounded-sm">
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
                <div className="login_form w-full mt-4">
                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <div className="form_group mb-4 flex flex-col">
                            <label className="form_label mb-1" htmlFor="email">Email</label>
                            <input className="form_input p-2 rounded-sm border border-slate-400 outline-none" type="email" name="email" id="email" required />
                        </div>
                        <div className="form_group mb-8 flex flex-col">
                            <label className="form_label mb-1" htmlFor="password">Password</label>
                            <input className="form_input p-2 rounded-sm border border-slate-400 outline-none" type="password" name="password" id="password" required />
                        </div>
                        <div className="form_group mb-6">
                            <button className="form_button bg-buttoncolor py-3 rounded-sm w-full text-white font-medium" type="submit">Login</button>
                        </div>
                    </form>
                </div>
                <div className="seperator_line h-px bg-gray w-full mt-2"></div>
                <div className='login_footer mt-6 text-center'>
                    <p>Don't have an account? <Link to={'/signup'} className='text-buttoncolor'>Sign up</Link></p>
                </div>
            </div>
        </div>
        
     );
}
 
export default Login;