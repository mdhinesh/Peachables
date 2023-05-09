const Practicemore = () => {
    return ( 
        <div className="practice_more_div">
            <h2 className='text-4xl mt-14 mb-8 pl-1'>Practice more</h2>
            {/* Later I plannig to make the card little taller and add a background image to it */}
            <div className="practice_more_div_card flex flex-row bg-card h-32 rounded-2xl relative">
            <div className='practice_more_div_card_left relative overflow-hidden w-24 h-full'>
                <img className='absolute w-24 h-24 -left-10 top-4' src="../src/assets/Card time info.svg" alt="" />
                <p className='z-50 decoration-black absolute top-14 text-sm'>10 min</p>
            </div>
            <div className="practice_more_div_card_text_info flex flex-col justify-center relative -left-8">
                <h2 className='text-2xl p-1'>Daily quiz</h2>
                <p className='text-lg p-1'>20 mixed questions</p>
            </div>
            <div className="practice_more_div_card_hardness_info my-auto absolute right-28 top-12">
                <p className='bg-card-hardness p-2 w-28 h-auto text-center rounded font-medium' >Hard</p>
            </div>
            <div className="practice_more_div_card_right absolute right-10 top-14">
                <img className='h-5 w-5 cursor-pointer' src="../src/assets/start_quiz_button.svg" alt="Start" />
            </div>
        </div>
    </div>

     );
}
 
export default Practicemore;