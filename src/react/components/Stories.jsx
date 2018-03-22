import React from 'react'
import {FormControl,FormGroup} from 'react-bootstrap'

export default ({handleSubmit}) => (
    <div>
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
        
    </div>
)