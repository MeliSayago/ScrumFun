import React from 'react'
import {FormControl,FormGroup,ListGroupItem,ListGroup,Button} from 'react-bootstrap'

export default ({handleClick, handleSubmit, stories, buttonClick}) => (
    <div>
        <button className="btn btn-danger float-right" onClick={buttonClick}>Close</button>
        <form onSubmit={handleSubmit}>
            <FormGroup >
                <FormControl
                id="formControlsText"
                type="text"
                name="storyName"
                label="newStory"
                placeholder="Story Name"
                />
            <button>Submit</button>
            </FormGroup>
        </form>
        <div>
            <ListGroup>
            {stories.map((story,index) => (
                <ListGroupItem key={index}>
                {story.storyName}
                <Button onClick={handleClick} id={story.id} value={story.storyName} bsStyle="danger float-right">Delete</Button>
                </ListGroupItem>
            ))}   
            </ListGroup>
                
        </div>
    </div>
)