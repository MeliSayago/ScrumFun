import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,FormGroup,ListGroup,ListGroupItem} from 'reactstrap';
import {FormControl,Button} from 'react-bootstrap'
import './StoriesNavbar.css'

export default ({ handleClick, handleSubmit, stories, toggleNavbar,state }) => (
<div>
    <Navbar color="faded" light>
        <NavbarBrand className="mr-auto">Story Name</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!state.collapsed} navbar>
        <Nav navbar>
            <NavItem>
            <NavLink>
                <form onSubmit={handleSubmit}>
                    <FormGroup>
                        <FormControl
                        id="formControlsText"
                        type="text"
                        name="storyName"
                        label="newStory"
                        placeholder="Story Name"
                        />
                        {/* <button>Submit</button> */}
                    </FormGroup>
                </form>
            </NavLink>
            </NavItem>
            
            <NavItem>
                {stories.map((story, index) => (
            <NavLink key={index}>
                    {story.storyName}
                    <Button
                    onClick={handleClick}
                    id={story.id}
                    value={story.storyName}
                    bsStyle="danger float-right"
                    >
                    Delete
                    </Button>
            </NavLink>
                    ))}
            </NavItem>
        </Nav>
        </Collapse>
    </Navbar>
</div>
)