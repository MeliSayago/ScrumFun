import React from 'react'
import {Link} from 'react-router-dom'
import {FormControl,FormGroup,ControlLabel,Grid,Row,Col,Thumbnail,Button,Checkbox} from 'react-bootstrap'

export default ({onChange}) => (
    <div className="container">
        <form>
            <FormGroup>
            <ControlLabel><h1>Create Sesion</h1></ControlLabel>
            <FormControl
                type="text"
                onChange={onChange}
                name="boardName"
                placeholder="Enter text"
            />
            <Grid >
                <Row>
                    <Col xs={6} md={4}>
                    <Thumbnail src="" >
                        <h3>Thumbnail label</h3>
                        <Checkbox value="option 1" name="scale" onChange={onChange}> option 1 </Checkbox>
                    </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                    <Thumbnail src="">
                        <h3>Thumbnail label</h3>
                        <Checkbox value="option 2" name="scale" onChange={onChange}> option 2 </Checkbox>
                    </Thumbnail>
                    </Col>
                    <Col xs={6} md={4}>
                    <Thumbnail src="">
                        <h3>Thumbnail label</h3>
                        <Checkbox value="option 3" name="scale" onChange={onChange}> option 3 </Checkbox>
                    </Thumbnail>
                    </Col>
                </Row>
            </Grid>
            </FormGroup>
        </form>
    </div>
)