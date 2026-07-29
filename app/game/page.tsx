"use client";

import { useState } from "react";
import { PageIntro, SiteFrame } from "../../components/SiteFrame";

const questions = [
  {
    prompt: "Which four countries have shaped Debora's story?",
    answers: [
      "India, Ghana, Côte d'Ivoire & Belgium",
      "India, Kenya, France & Belgium",
      "Ghana, Nigeria, France & Belgium",
    ],
    correct: 0,
    reveal: "Born in India, raised across Ghana and Côte d'Ivoire, and now studying in Belgium.",
  },
  {
    prompt: "What happened at the Belgian Sustainability Business Game?",
    answers: [
      "She gave one speech",
      "Her team won two challenges",
      "She organized the catering",
    ],
    correct: 1,
    reveal: "Her team won UCB's challenge—and she and a teammate also won Euroclear's optional pitch.",
  },
  {
    prompt: "A project is stuck. Debora's first move is…",
    answers: [
      "Make a prettier deck",
      "Ask what problem we are actually solving",
      "Schedule six meetings",
    ],
    correct: 1,
    reveal: "Clarity before activity. Every time.",
  },
  {
    prompt: "The best way to give Debora feedback?",
    answers: [
      "Use the sandwich method",
      "Hint at it for three weeks",
      "Say it clearly and specifically",
    ],
    correct: 2,
    reveal: "Direct is kind. Specific is even kinder.",
  },
];

export default function GamePage() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [soundOn, setSoundOn] = useState(true);
  const finished = step >= questions.length;
  const question = questions[step];

  function playSound(kind: "correct" | "wrong" | "next" | "finish") {
    if (!soundOn) return;
    const AudioWindow = window as typeof window & {
      webkitAudioContext?: typeof AudioContext;
    };
    const AudioConstructor =
      window.AudioContext ?? AudioWindow.webkitAudioContext;
    if (!AudioConstructor) return;
    const context = new AudioConstructor();
    const notes =
      kind === "correct" ? [523, 659, 784] :
      kind === "wrong" ? [190, 125] :
      kind === "finish" ? [392, 523, 659, 784] :
      [330];

    notes.forEach((frequency, index) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      const start = context.currentTime + index * 0.07;
      oscillator.type = "square";
      oscillator.frequency.setValueAtTime(frequency, start);
      gain.gain.setValueAtTime(0.045, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.09);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start(start);
      oscillator.stop(start + 0.1);
    });
    window.setTimeout(() => void context.close(), 650);
  }

  function choose(index: number) {
    if (selected !== null) return;
    setSelected(index);
    if (index === question.correct) {
      setScore((value) => value + 1);
      playSound("correct");
    } else {
      playSound("wrong");
    }
  }

  function next() {
    playSound(step === questions.length - 1 ? "finish" : "next");
    setSelected(null);
    setStep((value) => value + 1);
  }

  function restart() {
    playSound("next");
    setStep(0);
    setScore(0);
    setSelected(null);
  }

  return (
    <SiteFrame current="/game">
      <PageIntro
        title="HOW WELL DO YOU KNOW DEBORA?"
        compact
      />
      <section className="game-shell">
        <span className="pixel-spark spark-one" aria-hidden="true" />
        <span className="pixel-spark spark-two" aria-hidden="true" />
        <span className="pixel-spark spark-three" aria-hidden="true" />
        <div className="arcade-hud">
          <span className="arcade-logo">DEBORA.EXE</span>
          <div>
            <span>SCORE {String(score * 250).padStart(4, "0")}</span>
            <button
              type="button"
              onClick={() => setSoundOn((value) => !value)}
              aria-pressed={soundOn}
            >
              {soundOn ? "♪ SOUND ON" : "× MUTED"}
            </button>
          </div>
        </div>
        <div className="pixel-avatar-wrap" aria-hidden="true">
          <img src="/images/debora-bitmoji.jpeg" alt="" />
          <span>PLAYER 1</span>
        </div>
        {!finished ? (
          <div className="game-question" key={step}>
            <div className="game-progress" aria-label={`Question ${step + 1} of ${questions.length}`}>
              {questions.map((_, index) => <span key={index} className={index <= step ? "filled" : ""} />)}
            </div>
            <span className="pixel-label">LEVEL {step + 1} / {questions.length}</span>
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
                  <span>{String.fromCharCode(65 + index)}</span>
                  <strong>{answer}</strong>
                  {selected !== null && index === question.correct && <i>+250</i>}
                  {selected === index && index !== question.correct && <i>MISS</i>}
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
          </div>
        ) : (
          <div className="score-card">
            <div className="pixel-confetti" aria-hidden="true">
              {Array.from({ length: 18 }, (_, index) => <i key={index} />)}
            </div>
            <span className="pixel-label">GAME COMPLETE</span>
            <strong>{score}/{questions.length}</strong>
            <h2>
              {score === questions.length ? "You really get her." :
               score >= 2 ? "You two should probably talk." :
               "Excellent excuse for a coffee."}
            </h2>
            <p>The real Debora is less multiple-choice. Luckily, she replies to email.</p>
            <button type="button" className="pixel-restart" onClick={restart}>↻ PLAY AGAIN</button>
          </div>
        )}
      </section>
    </SiteFrame>
  );
}
