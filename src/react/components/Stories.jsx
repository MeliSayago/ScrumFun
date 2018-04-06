import React from 'react'
import {FormControl,Button,ListGroup,ListGroupItem} from 'react-bootstrap'
import './Stories.css'

export default({  
  handleClick,
  handleSubmit,
  stories,
  toggleNavbar,
  state,
  selectStory,
  fnSelectStory,
}) => (
  <div className="top">
    <div>
      <h3>{selectStory ? selectStory.storyName : 'No stories!'}</h3>
      <form onSubmit={handleSubmit}>
          <FormControl
            id="formControlsText"
            type="text"
            name="storyName"
            label="newStory"
            placeholder="Story Name"
          />
      </form>
    </div>
    <div className="up">
    <ListGroup>
      {stories &&
      stories.map((story, index) => {
        console.log(story)
        if(!story.card){
          return(<ListGroupItem>
          <span onClick={() => !story.card && fnSelectStory(story)}>
            {story.storyName}
          </span>
          <Button
            onClick={(e) => !story.card && handleClick(e)}
            disabled={Boolean(story.card)}
            id={story.id}
            value={story.storyName}
            bsStyle="danger float-right"
            >
            Delete
          </Button>
        </ListGroupItem>)}
      })}
      </ListGroup>
    </div>
    <h4>Voted stories:</h4>
    <div className="down">
      <ListGroup>
        {stories &&
        stories.map((story, index) => {
          if(story.card){
            return(<ListGroupItem>
            <span>
              {story.storyName}
            </span>
          </ListGroupItem>)}
        })}
      </ListGroup>
    </div>
  </div>
)