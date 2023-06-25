import React,{ useEffect, useState } from "react";
import { getData } from "../logic/getData";
import propTypes from "prop-types";

import "../styles/timeline.css";

const TIMELINE = getData();

export function TimeLine() {
  const [next, setNext] = useState(0);

  function nextEvent() {

    if((next + 1) >= TIMELINE.length) {
      setNext(0);
      return;
    }
    setNext((next + 1));

  }

  function previousEvent() {
    if((next - 1) < 0) {
      setNext(TIMELINE.length - 1);
      return;
    }

    setNext(next - 1);
  }

  function selectingYear(year) {
    if (year.length > 4 || !year) return next;
    let index = TIMELINE.findIndex((val) => val.year == year);

    setNext(index);
    return index;
  }

  return (
    <div id="TimeLineContainer">
      <div id="ImageContainer">
        <Arrows />
        <img src={TIMELINE[next]["image"]} alt="" />
      </div>

      <LineYears year={next} event={selectingYear} />
      <YearContainer year={TIMELINE[next]["year"]} />
      <TextContainer subtitle={TIMELINE[next]["subtitle"]} />

      <InformationContainer
        firstParagraph={TIMELINE[next]["first_paragraph"]}
        secondParagraph={TIMELINE[next]["second_paragraph"]}
      />
    </div>
  );

  function Arrows() {
    return (
      <div id="arrowsContainer">
        <div className="arrowContainer" onClick={() => previousEvent()}>
          <div className="arrow left"></div>
        </div>

        <div className="arrowContainer" onClick={() => nextEvent()}>
          <div className="arrow right"></div>
        </div>
      </div>
    );
  }
}

function LineYears(props) {
  const [visitedYears, setVisitedYears] = useState(0);

  function onClick(e) {
    let index = props.event(e);
    setVisitedYears(index);
  }

  useEffect(() => {
    setVisitedYears(props.year);
  })

  
  return (
    <div id="LineYears" onClick={(e) => onClick(e.target.textContent)}>
      {TIMELINE.map((val, index) => (
        <React.Fragment key={index}>
          {index <= visitedYears ? (
            <div data-index={index} className="circle year active">
              {val.year}
            </div>
          ) : (
            <div data-index={index} className="circle year unactive">
              {val.year}
            </div>
          )}
          {index !== TIMELINE.length - 1 && <div className="conector"></div>}
        </React.Fragment>
      ))}
    </div>
  );
}

function YearContainer(props) {

  return (
    <div draggable="false" id="YearContainer">
      <div className="year-dividers">
        <div className="divider"></div>
        <div className="divider"></div>
        <div className="divider"></div>
        <div className="divider"></div>
      </div>
      <div className="year">{props.year}</div>
      <div className="year-dividers desc">
        <div className="divider"></div>
        <div className="divider"></div>
        <div className="divider"></div>
        <div className="divider"></div>
      </div>
    </div>
  );
}


function TextContainer(props) {
  return (
    <div id="TextContainer">
      <span className="shorttext">
        {props.subtitle}
      </span>
    </div>
  );
}

function InformationContainer(props) {
  const [show, setShow] = useState(false);

  let arrowDirection = show ? "up" : "below";
  let informationstate = show ? "show" : "hide";

  return (
    <div id="InformationContainer">
      <div id="ArrowContainer">
        <div
          onClick={() => setShow(show ? false : true)}
          className={"arrow " + arrowDirection}
        ></div>
      </div>

      <div id="Information" className={informationstate}>
        <section id="HistoryText">
          <article className="paragraph">{props.firstParagraph}</article>

          <article className="paragraph">{props.secondParagraph}</article>
        </section>
      </div>
    </div>
  );
}


// Prop Validations

YearContainer.propTypes = {
  year: propTypes.string
}

InformationContainer.propTypes = {
  firstParagraph: propTypes.string,
  secondParagraph: propTypes.string,
};

TextContainer.propTypes = {
  subtitle: propTypes.string
}

LineYears.propTypes = {
  event: propTypes.func,
  year: propTypes.number
}



