import React, { useState } from 'react';
import { Manager } from 'react-popper';
import data from './data';
import SingleQuestion from './Question';


function App() {
  const [questions,setQuestions] = useState(data);


  return(
    <main>
      <div className="container">
          <h3>Questions and Answers about Login. </h3>

          <section className="info">
              {questions.map((question)=> {
                return <SingleQuestion key={question.id} {...questions}/>
              }
              )}
          </section>
      </div>
    </main>
  )
}

export default App;
