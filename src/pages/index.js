import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Container from "../components/UI/Container/Container";
import Heading from "../components/Heading/Heading";
import LoadingBar from "../components/LoadingBar/LoadingBar";
import AllQuestions from "../components/UI/AllQuestions/AllQuestions";
import HtmlQuestions from "../components/Questions/HtmlQuestions/HtmlQuestions";
import Modal from "../components/UI/Modal/Modal";
import "./index.css";
import CssQuestions from "../components/Questions/CssQuestions/CssQuestions";
import JsQuestions from "../components/Questions/JsQuestions/JsQuestions";
import {
  globalCssQuestions,
  globalHtmlQuestions,
  globalJsQuestions,
} from "../components/Data/data.js";

import { useState, useEffect } from "react";

const IndexPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [curBtn, setCurBtn] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [totalScore, setTotalscore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [isDisabled, setIsDisabled] = useState();
  const [buttonClass, setButtonClass] = useState("btn--default");

  const clickHandler = (question, currentButton) => {
    setCurBtn(currentButton);
    setOpenModal(true);

    setCurrentQuestion(question);
    console.log(question);
  };

  const handelSelectedAnswer = (answer) => {
    setSelectedAnswer(+answer.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setOpenModal(false);

    if (selectedAnswer === currentQuestion.corAnsw) {
      curBtn.className = "button btn--correct";
      setIsCorrect(true);
    } else {
      curBtn.className = "button btn--incorect";
    }
    curBtn.disabled = true;
  };

  useEffect(() => {
    if (isCorrect) {
      setTotalscore(totalScore + 1);
      setIsCorrect(null);
    }
  }, [isCorrect]);

  useEffect(() => {
    if (!isDisabled) {
      setIsDisabled();
    }
    setButtonClass("btn--default");
  }, [isDisabled]);

  const resetHandler = (e) => {
    e.preventDefault();
    setButtonClass(null);
    setTotalscore(0);
    setIsDisabled(false);
  };

  return (
    <div className="app-layout">
      <Header onClick={resetHandler} />
      <Container>
        <div>
          <Heading />
          <LoadingBar percentage={totalScore * 5} />
        </div>
        <AllQuestions>
          <HtmlQuestions
            htmlQuestions={globalHtmlQuestions}
            onClick={clickHandler}
            className={buttonClass}
            disabled={isDisabled}
          />
          <CssQuestions
            cssQuestions={globalCssQuestions}
            onClick={clickHandler}
            className={buttonClass}
            disabled={isDisabled}
          />
          <JsQuestions
            jsQuestions={globalJsQuestions}
            onClick={clickHandler}
            className={buttonClass}
            disabled={isDisabled}
          />
        </AllQuestions>
      </Container>
      <Footer />
      {openModal && (
        <Modal
          onChange={handelSelectedAnswer}
          onClick={submitHandler}
          question={currentQuestion.question}
          pAnswers={currentQuestion.answ}
        />
      )}
    </div>
  );
};

export default IndexPage;

export const Head = () => {
  return (
    <React.Fragment>
      <title>Home Page</title>;
      <meta name="description" content="My description" />
    </React.Fragment>
  );
};
