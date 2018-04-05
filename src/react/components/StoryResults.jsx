import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default ({ cardModa, story, handleClickButton, nextStory, voteAgain }) =>
  cardModa ? (
    <div>
      {console.log('story', story.id)}
      <h1>{story.storyName}</h1>
      <div>
        <ul className="xop-grid">
          {cardModa &&
            cardModa.map((card, index) => (
              <li key={index}>
                {console.log(card)}
                <button className="xop-box xop-img">
                  <h1
                    key={index}
                    onClick={() => handleClickButton(story.id, card)}
                  >
                    {card}
                  </h1>
                </button>
              </li>
            ))}
        </ul>
      </div>
      <ButtonToolbar>
        <Link to={'/test/game'}>
          <Button
            name="nextStory"
            id="nextStory"
             onClick={() => nextStory()}
            disabled="false"
          >
            Proxima historia
          </Button>
        </Link>

        <Button name="voteAgain" onClick={() => voteAgain()}>
          Votar de vuelta
        </Button>
      </ButtonToolbar>
    </div>
  ) : (
    <div>
      <img src="" />
    </div>
  );
