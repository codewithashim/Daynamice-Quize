import React from "react";

const quizeList = [
  {
    id: 1,
    quizeQuisten: "Quize Quisten",
    quizeAnswer: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
  },
  {
    id: 2,
    quizeQuisten: "Quize Quisten",
    quizeAnswer: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
  },
  {
    id: 3,
    quizeQuisten: "Quize Quisten",
    quizeAnswer: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
  },
  {
    id: 3,
    quizeQuisten: "Quize Quisten",
    quizeAnswer: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
  },
  {
    id: 4,
    quizeQuisten: "Quize Quisten",
    quizeAnswer: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
  },
  {
    id: 5,
    quizeQuisten: "Quize Quisten",
    quizeAnswer: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
  },
  {
    id: 6,
    quizeQuisten: "Quize Quisten",
    quizeAnswer: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
  },
  {
    id: 7,
    quizeQuisten: "Quize Quisten",
    quizeAnswer: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
  },
  {
    id: 8,
    quizeQuisten: "Quize Quisten",
    quizeAnswer: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
  },
  {
    id: 9,
    quizeQuisten: "Quize Quisten",
    quizeAnswer: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
  },
  {
    id: 10,
    quizeQuisten: "Quize Quisten",
    quizeAnswer: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
  },
];

const QuizeList = () => {
  const [quizeList, setQuizeList] = React.useState([]);

  const handelOnChange = (e) => {
    const { name, value } = e.target;
    setQuizeList({ ...quizeList, [name]: value });
    console.log(quizeList);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(quizeList);
    setQuizeList([]);
    console.log(quizeList);
  };

  return (
    <section className="container">
      <div className="mainQuizeContainer container">
        <div className="quizeContain">
          <ol className="quizeQuistenSection">
            {quizeList.map((quize) => {
              return (
                <li className="quizeQuisten" key={quize.id}>
                  <h4>{quize.quizeQuisten}</h4>
                  <div className="answerOpction">
                    <ol type="a">
                      {quize.quizeAnswer.map((answer) => {
                        return (
                          <li>
                            <label className="block mb-2 mx-2">
                              <input
                                type="radio"
                                name="quizeAnswer"
                                value={answer}
                                onChange={handelOnChange}
                              />
                              {answer}
                            </label>
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="quizeButton">
            <button
              type="submit"
              className="quizeBtnSubmit"
              onClick={handelSubmit}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizeList;
