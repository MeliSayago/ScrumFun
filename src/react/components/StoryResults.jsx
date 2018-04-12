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
  resultList
}) =>
  cardModa ? (
    <div>
      <h1>{story.storyName}</h1>
      <div>
      <ul className="xop-grid">
        {resultList && resultList.map((user, index) => (
          cardModa.map(card => {
            return card == user.points ? 
            <li key={index}>
              <button className="xop-box xop-img">
                <img src={user.img} alt="" onClick={() => handleClickButton(card)}/>
                <div>
                  <h3>{user.size}</h3>
                </div>
              </button>
            </li>
            :""
          })
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
