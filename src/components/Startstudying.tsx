import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchQuizList } from '../api/quizlist';
import '../styles/Startstudying.css';

const StartStudying = () => {

    const [quizzes, setQuizzes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // call the api method: fetchQuizList() and
    // set the quizzes state to the data returned from the api
    useEffect(() => {
      async function getQuizzes() {
        const data = await fetchQuizList();
        setQuizzes(data);
        setIsLoading(false);
        // temp(data);
      }
      getQuizzes();
    }, []);

    // Conditional rendering
    if (isLoading) {
        return <div className='h-screen flex align-center justify-center'>
                    Loading...
            </div>;
    }

    return ( 
        <div className="start_studying py-2 md:pt-2 h-screen snap-center max-[600px]:ml-4 max-[600px]:mr-4">
            <h2 className='text-4xl mt-11 mb-7 pl-1'>Start studying</h2>
            <div className="start_studying_cards grid grid-rows-5 grid-flow-row gap-4 h-4/5">

                <div className="start_studying_card_container overscroll-contain overflow-y-auto snap-y">
                {/* scrollbar-thin scrollbar-track-blue-100 scrollbar-thumb-gray-500 hover:scrollbar-thumb-blue-700 */}
                {quizzes.map((quiz: { quizname: any; questionNumbers: any; hardness: any; time: any }) => (
                    <div key={quiz.quizname} className='start_studying_card flex flex-row h-28 rounded-2xl relative bg-card my-5 mr-5 snap-center'>
                        <div className="start_studying_card_img my-auto p-5">
                            <img src="/src/assets/start_studying_card_img.svg" alt="" />
                        </div>
                        <div className='start_studying_card_text_info my-auto'>
                            <h2 className='text-2xl p-1'>
                                {quiz.quizname}
                            </h2>
                            <p className='text-lg p-1'>
                                {quiz.questionNumbers} questions
                                 {/* - {quiz.time} min */}
                            </p>
                        </div>
                        <div className="start_studying_card_hardness_info my-auto absolute right-28 top-10">
                        {/* laptop:right-16 laptop:top-9 */}
                            <p className='bg-card-hardness p-2 w-28 h-auto text-center rounded font-medium quiz_harness_level' >
                                {quiz.hardness}
                            </p>
                        </div>
                        <div className="start_studying_card_right absolute right-10 top-12 ">
                        {/* laptop:right-8 */}
                            <Link to={`/takequiz/${quiz.quizname}`}>
                                <img className='h-5 w-5 cursor-pointer' src="/src/assets/start_quiz_button.svg" alt="Start" />
                            </Link>
                        </div>
                    </div>
                ))}
                <p className="end text-center text-lg my-60 snap-center">That's it for the day</p>
                </div>
            </div>
        </div>

     );
}
 
export default StartStudying;