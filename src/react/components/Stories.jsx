import React from 'react'
import {FormControl,FormGroup,ListGroupItem,ListGroup,Button} from 'react-bootstrap'

export default ({handleClick, handleSubmit, stories}) => (
    <div>
        {console.log("stories",stories)}
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
                <Button onClick={handleClick} id={story.id} value={story.storyName} bsStyle="danger">Delete</Button>
                </ListGroupItem>
            ))}   
            </ListGroup>
                
        </div>
    </div>
)