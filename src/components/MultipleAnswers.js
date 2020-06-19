import React from 'react'

function MultipleAnswers(props) {

    return(
        <div
            className="answer"
            onClick={() => props.setProposedAnswers(props.answer)}
        >
            {
                props.proposedAnswers === props.answer &&
                <span>[X] </span>
            }
            {props.answer}
        </div>
    )
}



export default MultipleAnswers