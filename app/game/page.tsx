"use client";

import { useState } from "react";
import { PageIntro, SiteFrame } from "../../components/SiteFrame";

const questions = [
  {
    prompt: "A project is stuck. Debora's first move is…",
    answers: ["Make a prettier deck", "Ask what problem we are actually solving", "Schedule six meetings"],
    correct: 1,
    reveal: "Clarity before activity. Every time.",
  },
  {
    prompt: "The best way to give Debora feedback?",
    answers: ["Use the sandwich method", "Hint at it for three weeks", "Say it clearly and specifically"],
    correct: 2,
    reveal: "Direct is kind. Specific is even kinder.",
  },
  {
    prompt: "Which talent is secretly doing the most work?",
    answers: ["Learner", "Communicator", "Momentum maker"],
    correct: 0,
    reveal: "Curiosity powers almost everything else.",
  },
  {
    prompt: "The ideal deadline sounds like…",
    answers: ["Whenever", "Soon-ish", "Friday at 3pm CET"],
    correct: 2,
    reveal: "A real date is a tiny act of love.",
  },
];

export default function GamePage() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const finished = step >= questions.length;
  const question = questions[step];

  function choose(index: number) {
    if (selected !== null) return;
    setSelected(index);
    if (index === question.correct) setScore((value) => value + 1);
  }

  function next() {
    setSelected(null);
    setStep((value) => value + 1);
  }

  function restart() {
    setStep(0);
    setScore(0);
    setSelected(null);
  }

  return (
    <SiteFrame current="/game">
      <PageIntro
        eyebrow="Four questions. Zero pressure."
        title="HOW WELL DO YOU KNOW DEBORAH?"
        note="the least intimidating personality test on the internet"
      />
      <section className="game-shell">
        {!finished ? (
          <>
            <div className="game-progress" aria-label={`Question ${step + 1} of ${questions.length}`}>
              {questions.map((_, index) => <span key={index} className={index <= step ? "filled" : ""} />)}
            </div>
            <span className="eyebrow">Question {step + 1} / {questions.length}</span>
            <h2>{question.prompt}</h2>
            <div className="answer-grid">
              {question.answers.map((answer, index) => (
                <button
                  type="button"
                  onClick={() => choose(index)}
                  key={answer}
                  className={
                    selected === null ? "" :
                    index === question.correct ? "correct" :
                    index === selected ? "wrong" : "muted"
                  }
                >
                  <span>{String.fromCharCode(65 + index)}</span>{answer}
                </button>
              ))}
            </div>
            {selected !== null && (
              <div className="answer-reveal">
                <p>{question.reveal}</p>
                <button type="button" className="button button-dark" onClick={next}>
                  {step === questions.length - 1 ? "See my score" : "Next question"} →
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="score-card">
            <span className="hand-note">officially peer reviewed</span>
            <strong>{score}/{questions.length}</strong>
            <h2>
              {score === questions.length ? "You really get her." :
               score >= 2 ? "You two should probably talk." :
               "Excellent excuse for a coffee."}
            </h2>
            <p>The real Debora is less multiple-choice. Luckily, she replies to email.</p>
            <button type="button" className="button button-light" onClick={restart}>Play again</button>
          </div>
        )}
      </section>
    </SiteFrame>
  );
}
