import { Link } from "react-router-dom";
import { logout } from "../auth/config";

const Profile = () => {
    return ( 
        <div className="Profile h-full">
            <div className="profile_container tablet:w-3/4 laptop:w-1/2 tablet:mx-10 laptop:mx-auto pt-16">
                <p className="hover:underline cursor-pointer text-xl pl-1"><Link to={'/'}>Back</Link></p>
                <div className="profile_header flex flex-row justify-between">
                    <div className="profile_text_info my-auto">
                        <h1 className="text-5xl">username</h1>
                        <h2 className="flex flex-row">
                            <p className="text-xl hover:underline cursor-pointer">
                                Edit 
                            </p>
                                <span className="text-5xl leading-3 relative -top-1 px-2">
                                    .
                                </span> 
                            <p onClick={logout} className="text-xl hover:underline cursor-pointer">
                                logout
                            </p>
                        </h2>
                    </div>
                    <div className="profile_img_div bg-quiz w-32 h-32 rounded-full">
                        {/* <img src="" alt="" /> */}
                    </div>
                </div>{/*  Profile header end */}

                <div className="profile_header_body_seperator h-0.5 w-3/4 rounded-full border-b-4 border-card-time relative -top-2">
                </div>

                <div className="your_quizzes py-2 md:pt-2 h-screen snap-center">
                    <div className="your_quizzes_header_div flex flex-row justify-between mt-8 mb-4">
                        <h2 className='text-4xl pl-1'>Your quizzes</h2>
                    </div>
                    <div className="your_quizzes_cards grid grid-rows-5 grid-flow-row gap-4 h-4/5">

                        <div className="your_quizzes_card_container overscroll-contain overflow-y-auto snap-y">
                        {/* scrollbar-thin scrollbar-track-blue-100 scrollbar-thumb-gray-500 hover:scrollbar-thumb-blue-700 */}
                        {/*Card-1*/}
                        <div className='your_quizzes_card flex flex-row h-28 rounded-2xl relative bg-card my-5 mr-5 snap-center'>
                            <div className="your_quizzes_card_img my-auto p-5">
                            <img src="../src/assets/start_studying_card_img.svg" alt="" />
                            </div>
                            <div className='your_quizzes_card_text_info my-auto'>
                            <h2 className='text-2xl p-1'>Mathematics</h2>
                            <p className='text-lg p-1'>20 questions - 10 min</p>
                            </div>
                            <div className="your_quizzes_card_hardness_info my-auto absolute right-28 top-10">
                            {/* laptop:right-16 laptop:top-9 */}
                            <p className='bg-card-hardness p-2 w-28 h-auto text-center rounded font-medium' >Hard</p>
                            </div>
                            <div className="your_quizzes_card_right absolute right-10 top-12 ">
                            {/* laptop:right-8 */}
                            <img className='h-5 w-5 cursor-pointer' src="../src/assets/start_quiz_button.svg" alt="Start" />
                            </div>
                        </div>
                        {/*Card-1*/}
                        <div className='your_quizzes_card flex flex-row h-28 rounded-2xl relative bg-card my-5 mr-5 snap-center'>
                            <div className="your_quizzes_card_img my-auto p-5">
                            <img src="../src/assets/start_studying_card_img.svg" alt="" />
                            </div>
                            <div className='your_quizzes_card_text_info my-auto'>
                            <h2 className='text-2xl p-1'>Mathematics</h2>
                            <p className='text-lg p-1'>20 questions - 10 min</p>
                            </div>
                            <div className="your_quizzes_card_hardness_info my-auto absolute right-28 top-10">
                            {/* laptop:right-16 laptop:top-9 */}
                            <p className='bg-card-hardness p-2 w-28 h-auto text-center rounded font-medium' >Hard</p>
                            </div>
                            <div className="your_quizzes_card_right absolute right-10 top-12 ">
                            {/* laptop:right-8 */}
                            <img className='h-5 w-5 cursor-pointer' src="../src/assets/start_quiz_button.svg" alt="Start" />
                            </div>
                        </div>
                        {/*Card-1*/}
                        <div className='your_quizzes_card flex flex-row h-28 rounded-2xl relative bg-card my-5 mr-5 snap-center'>
                            <div className="your_quizzes_card_img my-auto p-5">
                            <img src="../src/assets/start_studying_card_img.svg" alt="" />
                            </div>
                            <div className='your_quizzes_card_text_info my-auto'>
                            <h2 className='text-2xl p-1'>Mathematics</h2>
                            <p className='text-lg p-1'>20 questions - 10 min</p>
                            </div>
                            <div className="your_quizzes_card_hardness_info my-auto absolute right-28 top-10">
                            {/* laptop:right-16 laptop:top-9 */}
                            <p className='bg-card-hardness p-2 w-28 h-auto text-center rounded font-medium' >Hard</p>
                            </div>
                            <div className="your_quizzes_card_right absolute right-10 top-12 ">
                            {/* laptop:right-8 */}
                            <img className='h-5 w-5 cursor-pointer' src="../src/assets/start_quiz_button.svg" alt="Start" />
                            </div>
                        </div>
                        {/*Card-1*/}
                        <div className='your_quizzes_card flex flex-row h-28 rounded-2xl relative bg-card my-5 mr-5 snap-center'>
                            <div className="your_quizzes_card_img my-auto p-5">
                            <img src="../src/assets/start_studying_card_img.svg" alt="" />
                            </div>
                            <div className='your_quizzes_card_text_info my-auto'>
                            <h2 className='text-2xl p-1'>Mathematics</h2>
                            <p className='text-lg p-1'>20 questions - 10 min</p>
                            </div>
                            <div className="your_quizzes_card_hardness_info my-auto absolute right-28 top-10">
                            {/* laptop:right-16 laptop:top-9 */}
                            <p className='bg-card-hardness p-2 w-28 h-auto text-center rounded font-medium' >Hard</p>
                            </div>
                            <div className="your_quizzes_card_right absolute right-10 top-12 ">
                            {/* laptop:right-8 */}
                            <img className='h-5 w-5 cursor-pointer' src="../src/assets/start_quiz_button.svg" alt="Start" />
                            </div>
                        </div>
                        {/*Card-1*/}
                        <div className='your_quizzes_card flex flex-row h-28 rounded-2xl relative bg-card my-5 mr-5 snap-center'>
                            <div className="your_quizzes_card_img my-auto p-5">
                            <img src="../src/assets/start_studying_card_img.svg" alt="" />
                            </div>
                            <div className='your_quizzes_card_text_info my-auto'>
                            <h2 className='text-2xl p-1'>Mathematics</h2>
                            <p className='text-lg p-1'>20 questions - 10 min</p>
                            </div>
                            <div className="your_quizzes_card_hardness_info my-auto absolute right-28 top-10">
                            {/* laptop:right-16 laptop:top-9 */}
                            <p className='bg-card-hardness p-2 w-28 h-auto text-center rounded font-medium' >Hard</p>
                            </div>
                            <div className="your_quizzes_card_right absolute right-10 top-12 ">
                            {/* laptop:right-8 */}
                            <img className='h-5 w-5 cursor-pointer' src="../src/assets/start_quiz_button.svg" alt="Start" />
                            </div>
                        </div>
                        {/*Card-1*/}
                        <div className='your_quizzes_card flex flex-row h-28 rounded-2xl relative bg-card my-5 mr-5 snap-center'>
                            <div className="your_quizzes_card_img my-auto p-5">
                            <img src="../src/assets/start_studying_card_img.svg" alt="" />
                            </div>
                            <div className='your_quizzes_card_text_info my-auto'>
                            <h2 className='text-2xl p-1'>Mathematics</h2>
                            <p className='text-lg p-1'>20 questions - 10 min</p>
                            </div>
                            <div className="your_quizzes_card_hardness_info my-auto absolute right-28 top-10">
                            {/* laptop:right-16 laptop:top-9 */}
                            <p className='bg-card-hardness p-2 w-28 h-auto text-center rounded font-medium' >Hard</p>
                            </div>
                            <div className="your_quizzes_card_right absolute right-10 top-12 ">
                            {/* laptop:right-8 */}
                            <img className='h-5 w-5 cursor-pointer' src="../src/assets/start_quiz_button.svg" alt="Start" />
                            </div>
                        </div>
                        <p className="end text-center text-lg my-60 snap-center">That's it for the day</p>
                        </div>
                        
                    </div>{/*  Crads end */}
                </div>{/*  Your quizzes end */}
            </div>{/*  Continer end */}
        </div>// Profile end
     );
}
 
export default Profile;