import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { fetchQuizData } from "../api/quizdata";
import { useParams } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";

interface QuizData {
  _id: string;
  question: string;
  options: string[];
  answer: number;
}

type QuizOptions = {
    options: string[];
}

const Takequiz = () => {


    const navigate = useNavigate();

    const [quizoptions, setQuizoptions] = useState('');
    const [quizdata, setquizdata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const { quizName } = useParams<{ quizName: string }>();

    const [selectedOption, setSelectedOption] = useState<string | undefined>(
        undefined
      );

    const [optionindex, setOptionindex] = useState(10);

    const [userscore, setUserscore] = useState(0);
        
    // `quizName` will contain the word after "takequiz" in the URL
    // console.log(quizName); // "Reactjs"
  
    useEffect(() => {
        if(currentQuestion >= 9) {
            return;
        }else {
            async function getQuizzes() {
                const data = await fetchQuizData(quizName as string);
                setquizdata(data);
                setIsLoading(false);
            }
            getQuizzes();
        }
    }, [quizName, currentQuestion]);

    useEffect(() => {
        // console.log("updated userscore", userscore);
        // alert(`Your score is ${userscore}`);
        // if(currentQuestion === 9) {
        //     setTimeout(() => {
        //         toast.success(`Your score is ${userscore}`)
        //     }, 5000);
        //     navigate('/')
        // }
    }, [userscore, currentQuestion]);
      
    const onsubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // console.log(quizoptions);
        // console.log(optionindex);
        if(optionindex === answer) {
            setUserscore(userscore + 1);
            setOptionindex(10);
        }
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(undefined); // reset selected option to undefined
        if(currentQuestion === 9) {
            toast.success(`Your score is ${userscore}`)
            alert(`Your score is ${userscore}`);
            navigate('/')
        }
    }

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
        setQuizoptions(event.target.value);
        setOptionindex(parseInt(event.target.id));
      };

    if (isLoading) {
        return <div className="h-screen flex flex-col items-center align-center justify-center vertical text-2xl" >Loading...</div>;
    }

    const { timeLimit, questions, _id } = quizdata[0];
    const { question, answer, options } = questions[currentQuestion];
    const questionNumber = currentQuestion + 1;

    return ( 
        <div className="take_quiz max-h-full min-h-screen flex flex-col justify-center">
            <div><Toaster/></div>
            <div className="take_quiz_container tablet:w-3/4 laptop:w-1/2 tablet:mx-10 laptop:mx-auto bg-choice py-5 px-8 rounded-xl">
                <div className="take_quiz_header flex flex-row justify-between text-xl items-center pb-5">
                    <p className="hover:underline cursor-pointer flex flex-row justify-items-start">
                        {/* <Link to={'/'}>Back</Link> */}
                        {questionNumber}/10
                    </p>
                    <h2 className="quiz_name -ml-10 text-3xl">
                        <p>
                            {quizName}
                        </p>
                    </h2>
                    <div className="">
                        {/* <p className="quiz_timer">
                            5:00
                        </p> */}
                    </div>
                </div>
                <div className="take_quiz_body">
                    <form onSubmit={onsubmit} >
                        <div className="take_quiz_question pb-5">
                            <p className="text-center relative text-2xl" >
                                {question}
                            </p>
                            {/* <textarea className="take_quiz_question_input flex flex-grow w-full h-34 p-4 text-2xl rounded-lg resize-none bg-choice text-center relative focus:outline outline-primary focus:bg-quiz outline-2" name="" id="" placeholder="Question"></textarea> */}
                        </div>
                        <div className="quiz_choices pb-5 flex flex-col">
                            {/* @ts-ignore */}
                            {options.map((option: string, index: number) => (
                                <div key={index} className="quiz_choice bg-colorcodeone h-16 flex flex-row justify-between items-center rounded-lg px-4 mb-5">
                                    <p className="text-xl">{option}</p>
                                    <input type="radio" name="quizoptions" id={index.toString()} className="h-5 w-5 " 
                                        value={option}
                                        checked={selectedOption === option}
                                        onChange={handleOptionChange}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="prev_next_delete_div flex flex-row justify-end">
                            <div className="quiz_next hover:underline cursor-pointer">
                                <button type="submit">
                                    <p className="text-xl">Next</p>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Takequiz;