import React from 'react'
import {FormControl,FormGroup,ListGroupItem,ListGroup} from 'react-bootstrap'

export default ({handleSubmit, stories}) => (
    <div>
        {console.log(stories)}
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
                </ListGroupItem>
            ))}   
            </ListGroup>
                
        </div>
    </div>
)