import React from 'react'
import { Button,ButtonGroup,Form,Row,Col } from 'react-bootstrap';

function WoodRange() {
    
        const [ value, setValue ] = React.useState(25);
        

      
        return (
          <Form>
            <Form.Group as={Row}>
            <Form.Label column sm="1" >
                        <Form.Check
                        
                        onChange={() => SetChecked(Checked)
                        }
                        /> 
                        </Form.Label>
                        <Form.Label column sm="2" >
                        Food    
                        </Form.Label>
              <Col xs="9">
                <RangeSlider
                  disabled={true}
                  min={0}
                  max={200}
                  step ={1}  
                  value={value}
                  onChange={e => setValue(e.target.value)}
                />
              </Col>
              <Col xs="3">
                <Form.Control value={value}/>
              </Col>
            </Form.Group>
          </Form>
        );
      
        
    };

    
export default WoodRange