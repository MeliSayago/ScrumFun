import React from 'react'
import {FormControl,FormGroup} from 'react-bootstrap'

export default ({onChange}) => (
    <div>
        <form>
            <FormGroup>
                <FormControl
                onChange={onChange}
                id="formControlsText"
                type="text"
                name="storyName"
                label="newStory"
                placeholder="Story Name"
                />
            </FormGroup>        
        <button >Submit</button>
        </form>
        
    </div>
)