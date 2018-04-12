import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default ({
  cardModa,
  story,
  handleClickButton,
  nextStory,
  voteAgain,
  active,
  uid,
  scrumMaster,
}) =>
  cardModa ? (
    <div>
      <h1>{story.storyName}</h1>
      <div>
        <ul className="xop-grid">
          {cardModa &&
            cardModa.map((card, index) => (
              <li key={index}>
                <button className="xop-box xop-img">
                  <h1 key={index} onClick={() => handleClickButton(card)}>
                    {card}
                  </h1>
                </button>
              </li>
            ))}
        </ul>
      </div>
      {scrumMaster[0] && scrumMaster[0].id === uid ? (
        <ButtonToolbar>
          <Button
            name="nextStory"
            id="nextStory"
            onClick={() => nextStory(story.id)}
            disabled={active}
          >
            Proxima historia
          </Button>

          <Button name="voteAgain" onClick={() => voteAgain()}>
            Votar de vuelta
          </Button>
        </ButtonToolbar>
      ) : (
        <div />
      )}
    </div>
  ) : (
    <div>
      <img src="" />
    </div>
  );
