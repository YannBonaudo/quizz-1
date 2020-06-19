import React, { useState } from 'react'

import './Question.css'

import MultipleAnswers from './MultipleAnswers'
import BoolAnswers from './BoolAnswers'


function Question(props) {
    const questionInfos = props.question
    const badAnswers = questionInfos.incorrect_answers.split(', ')
    const [proposedAnswers, setProposedAnswers] = useState([])
    const [answersIsTrue, setAnswersIsTrue] = useState()
    
    function verrifyAnswers() {
        const incrementation = 1;
        if(answersIsTrue !== true){
            if(proposedAnswers === questionInfos.correct_answer) {
                const newGoodAnswersNumber = props.goodAnswersNumber + incrementation;  
                setAnswersIsTrue(true)
                props.setGoodAnswersNumber(newGoodAnswersNumber)
            } else {
                const newBadAnswersNumber = props.badAnswersNumber + incrementation;
                setAnswersIsTrue(false)
                props.setBadAnswersNumber(newBadAnswersNumber)
            }
        }   
    }
    
    let multipleAnswersList
    if (questionInfos.type === "multiple") {
       
        multipleAnswersList = [...badAnswers, questionInfos.correct_answer].map((incorrect_answer, index) =>
        <MultipleAnswers
            key={index}
            proposedAnswers={proposedAnswers}
            setProposedAnswers={setProposedAnswers}
            answer={incorrect_answer}
        />)
        
    }


    return(
        <div className="question">
            <h3>
                {questionInfos.question}
                {
                    answersIsTrue &&
                    <span className="red"> Good Job !</span>
                }
                {
                    answersIsTrue === false &&
                    <span className="red"> Try again !</span>
                }
            </h3>
            {
                questionInfos.type === "multiple" && 
                multipleAnswersList
            }
            {
                questionInfos.type === "bool" && 
                <BoolAnswers
                    proposedAnswers={proposedAnswers}
                    setProposedAnswers={setProposedAnswers}
                />
            }
            <div className="submit-btn" onClick={verrifyAnswers}>
                <b>Vérifier</b>
            </div>
        </div>
    )
}

export default Question