import { Link, useNavigate } from "react-router-dom";
import { logout, monitorAuthState } from "../auth/config";
import { useEffect, useState } from "react";

const Profile = () => {

    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState("");

    const showLoginInfo = (user: any) => {
        if(user != null){
            let username = user.email.replace(/@.*/, '');
            setUserEmail(username);
        }
        console.log(`You're logged in as ${user.displayName} (uid: ${user.uid}, email: ${user.email}) `);
        // navigate("/");
    }

    const showLoginForm = () => {
        navigate('/login');
    }

    useEffect(() => {
        // Call the `monitorAuthState` function in the `useEffect()` hook
        monitorAuthState(showLoginInfo, showLoginForm);
        return () => {
            console.log("monitorAuthState() returned");
        }
    }, []);

    return ( 
        <div className="Profile h-full max-[600px]:mx-4">
            <div className="profile_container h-screen tablet:w-3/4 laptop:w-1/2 tablet:mx-10 laptop:mx-auto pt-16 max-[600px]:pt-8">
                <p className="hover:underline cursor-pointer text-xl pl-1"><Link to={'/'}>Back</Link></p>
                <div className="profile_header flex flex-row justify-between max-[600px]:mt-6">
                    <div className="profile_text_info my-auto">
                        <h1 className="text-5xl">{userEmail}</h1>
                        <h2 className="flex flex-row">
                            {/* <p className="text-xl hover:underline cursor-pointer">
                                Edit 
                            </p>
                                <span className="text-5xl leading-3 relative -top-1 px-2">
                                    .
                                </span>  */}
                            <p onClick={logout} className="text-xl hover:underline cursor-pointer max-[600px]:pl-1">
                                logout
                            </p>
                        </h2>
                    </div>
                    <div className="profile_img_div bg-quiz w-32 h-32 rounded-full max-[600px]:w-28 max-[600px]:h-28">
                        {/* <img src="" alt="" /> */}
                    </div>
                </div>{/*  Profile header end */}

                <div className="profile_header_body_seperator h-0.5 w-3/4 rounded-full border-b-4 border-card-time relative -top-2 max-[600px]:w-3/5">
                </div>

                <div className="your_quizzes py-2 md:pt-2 snap-center">
                    <div className="your_quizzes_header_div flex flex-row justify-between mt-8 mb-4">
                        <h2 className='text-4xl pl-1'>Your Activity</h2>
                    </div>
                    <div className="flex flex-row items-center justify-center align-middle pt-10">
                        none
                    </div>
                </div>{/*  Your quizzes end */}
            </div>{/*  Continer end */}
        </div>// Profile end
     );
}
 
export default Profile;