import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { fetchQuizData } from "../api/quizdata";

interface QuizData {
  _id: string;
  question: string;
  options: string[];
  answer: number;
}

const Takequiz = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const quizname = searchParams.get('queryParam');
  const option = "radio";

  const [quizoptions, setQuizoptions] = useState('');
  const [quizdata, setquizdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Array<number | null>>(Array(10).fill(null));
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [userScore, setUserScore] = useState(0);

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    async function getQuizzes() {
      const data = await fetchQuizData(quizname ? quizname : '');
      setquizdata(data);
      setIsLoading(false);
    }
    getQuizzes();
  }, [quizname]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const currentAnswer = userAnswers[currentQuestion];
    if (currentAnswer === answer) {
      setCorrectAnswers(correctAnswers + 1);
      setUserScore(userScore + 1);
    } else {
      setWrongAnswers(wrongAnswers + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    setIsChecked(false); // uncheck the radio button
    if(currentQuestion === 9) {
      alert(`Your score is ${userScore}`);
    }

  };

//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(quizoptions);
//     console.log(optionindex);
//     if(optionindex === answer) {
//         console.log("before update correct", userscore);
//         setUserscore(userscore + 1);
//         console.log("after update correct", userscore);
//         setOptionindex(5);
//     }
//     setCurrentQuestion(currentQuestion + 1);
//     setSelectedOption(undefined); // reset selected option to undefined
//     if(currentQuestion === 9) {
//         alert(`Your score is ${userscore}`);
//         return
//     }
// };


  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuizoptions(event.target.value);
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = parseInt(event.target.value);
    setUserAnswers(newUserAnswers);
    setIsChecked(true);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const { quizName, timeLimit, questions, _id } = quizdata[0];
  const { question, options, answer } = questions[currentQuestion];
  const option1 = options[0];
  const option2 = options[1];
  const option3 = options[2];
  const option4 = options[3];

    return ( 
        <div className="take_quiz max-h-full min-h-screen flex flex-col justify-center">
            <div className="take_quiz_container tablet:w-3/4 laptop:w-1/2 tablet:mx-10 laptop:mx-auto bg-choice py-5 px-8 rounded-xl">
                <div className="take_quiz_header flex flex-row justify-between text-xl items-center pb-5">
                    <p className="hover:underline cursor-pointer"><Link to={'/'}>Back</Link></p>
                    <h2 className="quiz_name">
                        <p>
                            {quizName}
                        </p>
                    </h2>
                    <div className="">
                        <p className="quiz_timer">
                            5:00
                        </p>
                    </div>
                </div>
                <div className="take_quiz_body">
                    {/* <div className="quiz_number_count_div flex flex-row w-20 justify-between">
                        <p>1</p>
                        <span>/</span>
                        <input type="text" className="w-10 px-2" />
                    </div> */}
                    <form onSubmit={onSubmit} >
                    <div className="take_quiz_question pb-5">
                        <p className="text-center relative text-2xl" >
                            {question}
                        </p>
                        {/* <textarea className="take_quiz_question_input flex flex-grow w-full h-34 p-4 text-2xl rounded-lg resize-none bg-choice text-center relative focus:outline outline-primary focus:bg-quiz outline-2" name="" id="" placeholder="Question"></textarea> */}
                    </div>
                    <div className="quiz_choices pb-5 flex flex-col">
                        <div className="quiz_choice bg-colorcodeone h-16 flex flex-row justify-between items-center rounded-lg px-4 mb-5">
                            <p className="text-xl">{option1}</p>
                            <input type={option} checked={isChecked} name="quizoptions" id="" className="h-5 w-5 " 
                                value={0}
                                onChange={onChange}
                            />
                        </div>
                        <div className="quiz_choice bg-colorcodeone h-16 flex flex-row justify-between items-center rounded-lg px-4 mb-5">
                            <p className="text-xl">{option2}</p>
                            <input type={option} checked={isChecked} name="quizoptions" id="" className="h-5 w-5 "
                                value={1}
                                onChange={onChange}
                            />
                        </div>
                        <div className="quiz_choice bg-colorcodeone h-16 flex flex-row justify-between items-center rounded-lg px-4 mb-5">
                            <p className="text-xl">{option3}</p>
                            <input type={option} checked={isChecked} name="quizoptions" id="" className="h-5 w-5 " 
                                value={2}
                                onChange={onChange}
                            />
                        </div>
                        <div className="quiz_choice bg-colorcodeone h-16 flex flex-row justify-between items-center rounded-lg px-4">
                            <p className="text-xl">{option4}</p>
                            <input type={option} checked={isChecked} name="quizoptions" id="" className="h-5 w-5 " 
                                value={3}
                                onChange={onChange}
                            />
                        </div>
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