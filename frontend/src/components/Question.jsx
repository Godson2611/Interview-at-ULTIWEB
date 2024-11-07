import React, { useState } from "react";

const Question = () => {
  const [questionType, setQuestionType] = useState("MCQ");

  const handleQuestionTypeChange = (type) => {
    setQuestionType(type);
  };

  return (
    <div className='container'>
      <div className='d-flex gap-2 justify-content-end mt-5'>
        <button className='btn btn-info text-white'>10 MCQ</button>
        <button className='btn btn-info text-white'>2 Test</button>
      </div>

      <div className='form'>
        <div className='shadow-sm p-3 mb-5 bg-body-tertiary rounded mt-4'>
          <div className='question_input mt-3'>
            <div className='d-flex justify-content-between'>
              <h5>Question 1</h5>
              <div className='dropdown'>
                <button
                  className='btn btn-secondary dropdown-toggle'
                  type='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  {questionType}
                </button>
                <ul className='dropdown-menu'>
                  <li>
                    <button
                      className='dropdown-item'
                      onClick={() => handleQuestionTypeChange("MCQ")}
                    >
                      MCQ
                    </button>
                  </li>
                  <li>
                    <button
                      className='dropdown-item'
                      onClick={() => handleQuestionTypeChange("Test")}
                    >
                      Test
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div class='form-floating mt-3'>
              <textarea
                class='form-control'
                placeholder='Enter your Question'
                id='floatingTextarea'
                style={{ height: "100px" }}
              ></textarea>
              <label for='floatingTextarea'>Enter your Question</label>
            </div>
          </div>
          <div className='question_options mt-4'>
            <div className='d-flex gap-3 align-items-center'>
              <h5>Options</h5>
              <button type='button' className='btn btn-info text-white'>
                Add Option
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
