import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

export default ({ cardModa, story, handleClickButton, nextStory }) => (
  <div>
    <h1>{story.storyName}</h1>
    <div>
      <ul className="xop-grid">
        {cardModa.map((card, index) => (
          <li key={index}>
            <button className="xop-box xop-img">
              <h1 key={index} onClick={() => handleClickButton(story.id, card)}>
                {card}
              </h1>
            </button>
          </li>
        ))}
      </ul>
    </div>
    <ButtonToolbar>
      {story.card ? (
        <Button name="nextStory" onClick={() => nextStory(story.id)}>
          Proxima historia
        </Button>
      ) : (
        <Button name="nextStory" disabled={true}>
          Proxima historia
        </Button>
      )}

      <Button name="voteAgain">Votar de vuelta</Button>
    </ButtonToolbar>
  </div>
);
