import React from 'react';

type Props = {
    question: string;
    options: string[];
};

console.log("Quizbody.tsx: 1");

const Quizbody = (props: Props) => {

    return (
        <div>
        <form >
            <div className="take_quiz_question pb-5">
                <p className="text-center relative text-2xl" >
                    {props.question}
                </p>
                {/* <textarea className="take_quiz_question_input flex flex-grow w-full h-34 p-4 text-2xl rounded-lg resize-none bg-choice text-center relative focus:outline outline-primary focus:bg-quiz outline-2" name="" id="" placeholder="Question"></textarea> */}
            </div>
            <div className="quiz_choices pb-5 flex flex-col">
                {props.options.map((option: string, index: number) => (
                    <div key={index} className="quiz_choice bg-colorcodeone h-16 flex flex-row justify-between items-center rounded-lg px-4 mb-5">
                        <p className="text-xl">{option}</p>
                        <input type="radio" name="quizoptions" id={index.toString()} className="h-5 w-5 " 
                            value={option}
                            // checked={selectedOption === option}
                            // onChange={handleOptionChange}
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
    )
}
 
export default Quizbody;