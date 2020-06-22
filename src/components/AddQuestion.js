import React, { useState } from "react";
function AddQuestion() {
    const [newQuestion, setNewQuestion] = useState({});
    console.log(newQuestion);
    function handleChange(e) {
        newQuestion[e.target.name] = e.target.value;
        setNewQuestion({ ...newQuestion });
    }

    const sendQuestion = () => {
        console.log("send");
    };

    return (
        <div>
            <h1>Ajoutez une question !</h1>
            <form action>
                <label>
                    ID (devine laquelle est pas utilisée mdr) :
                    <input type="text" name="id" />
                </label>
                <label>
                    Question :
                    <input
                        type="text"
                        name="question"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    La bonne réponse :
                    <input
                        type="text"
                        name="correct_answer"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Mauvaises réponses :
                    <input
                        type="text"
                        name="incorrect_answers"
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" onClick={sendQuestion} />
            </form>
        </div>
    );
}
export default AddQuestion;
