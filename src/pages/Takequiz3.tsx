import { useEffect, useState } from "react";
import { fetchQuizData } from "../api/quizdata";
import { Link, useParams } from "react-router-dom";
import Quizbody from "../components/Quizbody";

const Takequiz = () => {

    const [quizdata, setquizdata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { quizName } = useParams<{ quizName: string }>();

    const questionnumber = 10;

    useEffect(() => {

        async function getQuizzes() {
            const data = await fetchQuizData(quizName as string);
            setquizdata(data);
            setIsLoading(false);
        }
        getQuizzes();

    }, [quizName]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const questions: any = quizdata[0]['questions'];

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
                {questions.map((question: string, index: number) => {
                    console.log(questions[index]['options']);
                    <Quizbody 
                        question={questions[index][question]}
                        options={questions[index]['options']}
                    />  
                    setInterval(function () {
                        console.log("Hello");
                    }, 1000);
                })}
            </div>
        </div>
    </div>
    );
}
 
export default Takequiz;

{/* <QuestionCard
questionNr={number + 1}
totalQuestions={TOTAL_QUESTIONS}
question={questions[number].question}
answers={questions[number].answers}
userAnswer={userAnswers ? userAnswers[number] : undefined}
callback={checkAnswer}
/> */}
