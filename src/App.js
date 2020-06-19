import React, { useState, useEffect } from 'react'
import './App.css'
import Question from './components/Question'
import axios from 'axios'

function App() {

    const [goodAnswersNumber, setGoodAnswersNumber] = useState(0)
    const [badAnswersNumber, setBadAnswersNumber] = useState(0)
    const [seconds, setSeconds] = useState(60)
    const [questions, setQuestions] = useState ([])
    
    const questionsLefts = Object.keys(questions).length - goodAnswersNumber

    //console.log(QuestionsData)
    useEffect(()=> {
        axios.get('http://localhost:3001/questions')
            .then(res => {
                //console.log(res.data)
                setQuestions(res.data)
            })
            .catch(err => {
                console.log(err)
        })
    },[])

    function refreshPage() {
        window.location.reload(false);
      }

    useEffect(()=>{
        let interval = null;
        if(seconds > 0){
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1 );
            }, 1000);
        } else {
            clearInterval(interval);
            alert("Tu n'as pas fini le quizz dans le temps imparti ! Retente ta chance.")
            refreshPage()
        }
        return () => clearInterval(interval);
    }, [seconds]);


    return (
        <div className="app">
            <h1>Mon QUIZZ</h1>
            <p className="timer">Timer : {seconds}s </p>
            <h4>Nombre de bonnes réponses : {goodAnswersNumber}</h4>
            <h4>Nombre de mauvaises tentatives : {badAnswersNumber}</h4>
            <h4>Nombre de questions restantes : {questionsLefts}</h4>
            
            {
                questions.map(
                    question =>
                    <Question
                        key={question.id}
                        question={question}
                        goodAnswersNumber={goodAnswersNumber}
                        setGoodAnswersNumber={setGoodAnswersNumber}
                        badAnswersNumber={badAnswersNumber}
                        setBadAnswersNumber={setBadAnswersNumber}
                    />
                )
            }
        </div>
    )
}

export default App
