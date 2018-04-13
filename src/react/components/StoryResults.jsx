import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../components/SidebarUsers.css';

export default ({
  cardModa,
  story,
  handleClickButton,
  nextStory,
  voteAgain,
  active,
  uid,
  scrumMaster,
  resultList,
}) =>
  cardModa ? (
    <div>
      <h1 className="text-center ">
        <span>Story name: {story.storyName}</span>
      </h1>
      <div>
        <ul className="xop-grid">
          {resultList &&
            resultList.map((user, index) =>
              cardModa.map(card => {
                return card == user.points ? (
                  <li key={index}>
                    <button className="xop-box xop-img">
                      <img
                        src={user.img}
                        alt=""
                        onClick={() => handleClickButton(card)}
                      />
                      <div>
                        <h3>{user.size}</h3>
                      </div>
                    </button>
                  </li>
                ) : (
                  ''
                );
              }),
            )}
        </ul>
      </div>
      {scrumMaster[0] && scrumMaster[0].id === uid ? (
        <div className="finishButton">
          <ButtonToolbar>
            <Button
              className="finishButton"
              name="nextStory"
              id="nextStory"
              onClick={() => nextStory(story.id)}
              disabled={active}
            >
              Next Story
            </Button>
            <Button
              className="finishButton"
              name="voteAgain"
              onClick={() => voteAgain()}
            >
              Vote Again
            </Button>
          </ButtonToolbar>
        </div>
      ) : (
        <div />
      )}
    </div>
  ) : (
    <div>
      <img src="" />
    </div>
  );
