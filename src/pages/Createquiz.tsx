import { Link } from "react-router-dom";

const Createquiz = () => {
    return ( 
        <div className="create_quiz max-h-full min-h-screen flex flex-col justify-center">
            <div className="create_quiz_container tablet:w-3/4 laptop:w-1/2 tablet:mx-10 laptop:mx-auto bg-choice py-5 px-8 rounded-xl">
                <div className="create_quiz_header flex flex-row justify-between text-xl items-center pb-5">
                    <p className="hover:underline cursor-pointer"><Link to={'/'}>Back</Link></p>
                    <h2 className="quiz_name">
                        <input type="text" placeholder="Quiz Name" className="create_quiz_name_input p-2 rounded-md bg-choice text-center text-2xl focus:outline outline-primary focus:bg-quiz outline-2" />
                        {/* <p>Quiz name</p> */}
                    </h2>
                    <div className="">
                        <p className="quiz_timer">
                            5:00
                        </p>
                    </div>
                </div>
                <div className="create_quiz_body">
                    {/* <div className="quiz_number_count_div flex flex-row w-20 justify-between">
                        <p>1</p>
                        <span>/</span>
                        <input type="text" className="w-10 px-2" />
                    </div> */}
                    <div className="create_quiz_question pb-5">
                        <textarea className="create_quiz_question_input flex flex-grow w-full h-34 p-4 text-2xl rounded-lg resize-none bg-choice text-center relative focus:outline outline-primary focus:bg-quiz outline-2" name="" id="" placeholder="Question"></textarea>
                    </div>
                    <div className="multiple_answers_div  pb-5 flex flex-row text-lg items-center justify-center">
                        <input type="checkbox" name="" id="" className="h-5 w-5 checked:bg-blue-500 mr-2" />
                        <p>More than one correct answer</p>
                    </div>
                    <div className="quiz_choices pb-5 flex flex-col">
                        <div className="quiz_choice bg-colorcodeone h-16 flex flex-row justify-between items-center rounded-lg px-4 mb-5">
                            <input className="quiz_choice bg-colorcodeone p-1 px-4 w-full rounded-lg  placeholder-black outline-none text-xl" type="text" placeholder="Choice 1"/>
                            <input type="checkbox" name="" id="" className="h-5 w-5 " />
                        </div>
                        <div className="quiz_choice bg-colorcodeone h-16 flex flex-row justify-between items-center rounded-lg px-4 mb-5">
                            <input type="text" placeholder="Choice 2" className="quiz_choice p-1 pl-4 pr-1 w-60 rounded-lg bg-colorcodeone placeholder-black outline-none text-xl" />
                            <input type="checkbox" name="" id="" className="h-5 w-5 " />
                        </div>
                        <div className="quiz_choice bg-colorcodeone h-16 flex flex-row justify-between items-center rounded-lg px-4 mb-5">
                            <input type="text" placeholder="Choice 3" className="quiz_choice p-1 pl-4 pr-1 w-60 rounded-lg bg-colorcodeone placeholder-black outline-none text-xl" />
                            <input type="checkbox" name="" id="" className="h-5 w-5 " />
                        </div>
                        <div className="quiz_choice bg-colorcodeone h-16 flex flex-row justify-between items-center rounded-lg px-4">
                            <input type="text" placeholder="Choice 4" className="quiz_choice bg-colorcodeone p-1 pl-4 pr-1 w-60 rounded-lg placeholder-black outline-none text-xl" />
                            <input type="checkbox" name="" id="" className="h-5 w-5 " />
                        </div>
                    </div>
                    <div className="prev_next_delete_div flex flex-row justify-between">
                        <div className="quiz_prev hover:underline cursor-pointer">
                            <p>Prev</p>
                        </div>
                        <div className="quiz_delete cursor-pointer">
                            <p>Delete</p>
                        </div>
                        <div className="quiz_next hover:underline cursor-pointer">
                            <p>Next</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Createquiz;