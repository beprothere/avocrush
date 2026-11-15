"use client";
import Image from "next/image";
import faqbgpic from "@/../public/img/Faqbgpic.svg";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useState } from "react";
import avicon from "@/../public/img/iconavo.svg";

const Faq = () => {
  const [question1, setQuestion1] = useState(true);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [question4, setQuestion4] = useState(false);
  const [question5, setQuestion5] = useState(false);
  const [question6, setQuestion6] = useState(false);
  const [question7, setQuestion7] = useState(false);

  const question1open = () => {
    setQuestion1((current) => !current);
    setQuestion2(false);
    setQuestion3(false);
    setQuestion4(false);
    setQuestion5(false);
    setQuestion6(false);
    setQuestion7(false);
  };
  const question2open = () => {
    setQuestion1(false);
    setQuestion2((current) => !current);
    setQuestion3(false);
    setQuestion4(false);
    setQuestion5(false);
    setQuestion6(false);
    setQuestion7(false);
  };
  const question3open = () => {
    setQuestion1(false);
    setQuestion2(false);
    setQuestion3((current) => !current);
    setQuestion4(false);
    setQuestion5(false);
    setQuestion6(false);
    setQuestion7(false);
  };
  const question4open = () => {
    setQuestion1(false);
    setQuestion2(false);
    setQuestion3(false);
    setQuestion4((current) => !current);
    setQuestion5(false);
    setQuestion6(false);
    setQuestion7(false);
  };
  const question5open = () => {
    setQuestion1(false);
    setQuestion2(false);
    setQuestion3(false);
    setQuestion4(false);
    setQuestion5((current) => !current);
    setQuestion6(false);
    setQuestion7(false);
  };
  const question6open = () => {
    setQuestion1(false);
    setQuestion2(false);
    setQuestion3(false);
    setQuestion4(false);
    setQuestion5(false);
    setQuestion6((current) => !current);
    setQuestion7(false);
  };
  const question7open = () => {
    setQuestion1(false);
    setQuestion2(false);
    setQuestion3(false);
    setQuestion4(false);
    setQuestion5(false);
    setQuestion6(false);
    setQuestion7((current) => !current);
  };

  return (
    <div className="Faq-box">
      <div className="faq-bg-heading-box">
        <Image src={faqbgpic} alt="faq-bg-pic" />
        <strong>FAQ</strong>
      </div>

      <div className="faq-question-answer-box">
        <div className="faq-question-ineerbox-answer-box">
          <div className="opner_heading-box-faq" onClick={question1open}>
            <strong className="question-faq">
              How long does it stay fresh?
            </strong>
            <button className="opner-btn">
              {question1 ? <FaMinus /> : <FaPlus />}
            </button>
          </div>
          <i className="divide-line no-mobile"></i>

          {question1 && (
            <div className="answer-question-faq">
              <p>
                {"“"}Avocrush stays fresh for up to 60 days when refrigerated
                and unopened, thanks to cold-press technology and airtight
                packaging. Cold-pressed and sealed for freshness, it maintains
                its natural taste and vibrant green color. Once opened, it{"’"}s
                best enjoyed within 24{"–"}48 hours {"(1–2 days)"} for maximum
                flavor and color.{"”"}
              </p>
            </div>
          )}
        </div>

        <div className="faq-question-ineerbox-answer-box">
          <div className="opner_heading-box-faq" onClick={question2open}>
            <strong className="question-faq">How should I store it?</strong>
            <button className="opner-btn">
              {question2 ? <FaMinus /> : <FaPlus />}
            </button>
          </div>
          <i className="divide-line no-mobile"></i>

          {question2 && (
            <div className="answer-question-faq">
              <p>
                {"“"}Keep Avocrush in the fridge to stay fresh and creamy.
                Unopened, it{"’"}s good for up to 60 days, and once opened,
                enjoy it within 1-2 days for the perfect taste every time -
                ready whenever you are!{"”"}
              </p>
            </div>
          )}
        </div>

        <div className="faq-question-ineerbox-answer-box">
          <div className="opner_heading-box-faq" onClick={question3open}>
            <strong className="question-faq">Is it vegan?</strong>
            <button className="opner-btn">
              {question3 ? <FaMinus /> : <FaPlus />}
            </button>
          </div>
          <i className="divide-line no-mobile"></i>

          {question3 && (
            <div className="answer-question-faq">
              <p>
                {"“"}Yes, Avocrush is vegan! Made only from real ripe avocado
                with nothing added, it{"'"}s a pure creamy spread with chunks in
                it.
                {"”"}
              </p>
            </div>
          )}
        </div>

        <div className="faq-question-ineerbox-answer-box">
          <div className="opner_heading-box-faq" onClick={question4open}>
            <strong className="question-faq">
              Is it suitable for children?
            </strong>
            <button className="opner-btn">
              {question4 ? <FaMinus /> : <FaPlus />}
            </button>
          </div>
          <i className="divide-line no-mobile"></i>

          {question4 && (
            <div className="answer-question-faq">
              <p>
                {"“"}Yes - perfect for little ones! Made from real, ripe
                avocados, Avocrush is a creamy, wholesome, and naturally tasty
                spread that children will love any time of the day.{"”"}
              </p>
            </div>
          )}
        </div>

        <div className="faq-question-ineerbox-answer-box">
          <div className="opner_heading-box-faq" onClick={question5open}>
            <strong className="question-faq">What{"'"}s the shelf life?</strong>
            <button className="opner-btn">
              {question5 ? <FaMinus /> : <FaPlus />}
            </button>
          </div>
          <i className="divide-line no-mobile"></i>

          {question5 && (
            <div className="answer-question-faq">
              <p>
                {"“"}Avocrush stays fresh for 50 days in the refrigerator, so
                you can enjoy perfectly ripe avocado without any rush.{"”"}
              </p>
            </div>
          )}
        </div>

        <div className="faq-question-ineerbox-answer-box">
          <div className="opner_heading-box-faq" onClick={question6open}>
            <strong className="question-faq">
              How many calories per pack?
            </strong>
            <button className="opner-btn">
              {question6 ? <FaMinus /> : <FaPlus />}
            </button>
          </div>
          <i className="divide-line no-mobile"></i>

          {question6 && (
            <div className="answer-question-faq">
              <p>
                {"“"}Each 125g serving of Avocrush contains 215 kcal. Here{"’"}s
                the full nutritional breakdown per 100g: Fat: 16 g, Saturated
                fat: 2 g, Carbohydrates: 8 g, Sugars: 0 g, Protein: 2 g, Fiber:
                6g.{"”"}
              </p>
            </div>
          )}
        </div>

        <div className="faq-question-ineerbox-answer-box">
          <div className="opner_heading-box-faq" onClick={question7open}>
            <strong className="question-faq">
              What makes Avocrush{"’"}s texture unique?
            </strong>
            <button className="opner-btn">
              {question7 ? <FaMinus /> : <FaPlus />}
            </button>
          </div>
          <i className="divide-line no-mobile"></i>

          {question7 && (
            <div className="answer-question-faq">
              <p>
                Avocrush{"’"}s texture is uniquely smooth and creamy, yet still
                slightly chunky, giving you the perfect balance of spreadability
                and real avocado bites. Every spoonful feels fresh, rich, and
                naturally satisfying - just like a perfectly ripe avocado.
              </p>
            </div>
          )}
        </div>
      </div>

      <span className="no-desktop divide-line-box opacity-100! relative">
        <i className="divide-line opacity-45!"></i>
        <Image
          src={avicon}
          alt="icon-avo-pic1"
          className="icon-avo-pic00 absolute opacity-100!"
        />
      </span>
    </div>
  );
};

export default Faq;
