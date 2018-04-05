import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  FormGroup,
  ListGroup,
  ListGroupItem,
  selectStory,
} from 'reactstrap';
import { FormControl, Button } from 'react-bootstrap';
import './StoriesNavbar.css';

export default ({
  handleClick,
  handleSubmit,
  stories,
  toggleNavbar,
  state,
  selectStory,
  fnSelectStory,
}) => (
  <div>
    <Navbar color="faded" light>
      <NavbarBrand className="mr-auto">
        {selectStory ? selectStory.storyName : 'no hay historias'}
      </NavbarBrand>
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
                </FormGroup>
              </form>
            </NavLink>
          </NavItem>

          <NavItem>
            {stories &&
              stories.map((story, index) => (
                <NavLink key={index}>
                  <span onClick={() => !story.card && fnSelectStory(story)}>
                    {story.storyName}
                  </span>
                  <Button
                    onClick={() => !story.card && handleClick()}
                    disabled={Boolean(story.card)}
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
);
