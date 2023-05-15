

const Quizcard = (key: any, quiz: { quizname: any; questionNumbers: any; hardness: any; time: any }) => {

    console.log("Quiz Name:", quiz.quizname);
    console.log("Question Numbers:", quiz.questionNumbers);
    console.log("Hardness:", quiz.hardness);
    console.log("Time:", quiz.time);

    return ( 

        <div className="quizcard">
            <div key={quiz.quizname} className='start_studying_card flex flex-row h-28 rounded-2xl relative bg-card my-5 mr-5 snap-center'>
                <div className="start_studying_card_img my-auto p-5">
                    <img src="../src/assets/start_studying_card_img.svg" alt="" />
                </div>
                <div className='start_studying_card_text_info my-auto'>
                    <h2 className='text-2xl p-1'>
                        {quiz.quizname}
                    </h2>
                    <p className='text-lg p-1'>
                        {quiz.questionNumbers} questions - {quiz.time} min
                    </p>
                </div>
                <div className="start_studying_card_hardness_info my-auto absolute right-28 top-10">
                {/* laptop:right-16 laptop:top-9 */}
                    <p className='bg-card-hardness p-2 w-28 h-auto text-center rounded font-medium' >
                        {quiz.hardness}
                    </p>
                </div>
                <div className="start_studying_card_right absolute right-10 top-12 ">
                {/* laptop:right-8 */}
                    <img className='h-5 w-5 cursor-pointer' src="../src/assets/start_quiz_button.svg" alt="Start" />
                </div>
            </div>
        </div>

     );
}
 
export default Quizcard;