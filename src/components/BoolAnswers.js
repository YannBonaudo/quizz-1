import React from 'react'

function BoolAnswers(props) {


    return(
        <div>
            <div className="answer" onClick={() => props.setProposedAnswers(true)}>
            {
                props.proposedAnswers === true &&
                <span>[X] </span>
            }
                Vrai
            </div>
            <div className="answer" onClick={() => props.setProposedAnswers(false)}>
            {
                props.proposedAnswers === false &&
                <span>[X] </span>
            }
                Faux
            </div>
        </div>
    )
}



export default BoolAnswers