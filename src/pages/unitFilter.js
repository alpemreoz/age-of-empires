import React from 'react'
import { Button,ButtonGroup,Form,Row,Col } from 'react-bootstrap';

//import JsonUnitsData from '../components/unitData';
import NewDataTable from '../components/NewDataTable.js';
import "../styles/unitFilter.css"

function UnitFilter() {
    const [Checked, SetChecked] = React.useState(true);
    //const [ value, setValue ] = React.useState(50);
    const [ value, setValue ] = React.useState(25);
    return (
    <div className='filter'>
        <div className='age mt-5 '>
            <ButtonGroup aria-label="Basic example">
                <Button variant="outline-secondary">All</Button>
                <Button variant="outline-secondary">Dark</Button>
                <Button variant="outline-secondary">Feudal</Button>
                <Button variant="outline-secondary">Castle</Button>
                <Button variant="outline-secondary">Imperial</Button>
            </ButtonGroup>
        </div>
        <div className='cost ml-5'>
            <div className='Wood  d-flex justify-content-center '>
            <Form>
                    <Form.Group as={Row}>
                        
                        <Form.Label column sm="1" >
                        <Form.Check/>
                        {/* defaultChecked={Checked}
                        //onChange={() => SetChecked(!Checked)} */}
                        </Form.Label>
                        <Form.Label column sm="2" >
                        Wood    
                        </Form.Label>
                        
                        <Form.Range
                            column sm="1"
                            //value={value}
                            // onChange={e => setValue(e.target.value)}
                        />
                        
                        
                    </Form.Group>
                </Form>
            </div>
            <div className='Food d-flex justify-content-center'>
            <Form>
                    <Form.Group as={Row}>
                        
                        <Form.Label column sm="1" >
                        <Form.Check/>
                        {/* defaultChecked={Checked}
                        //onChange={() => SetChecked(!Checked)} */}
                        </Form.Label>
                        <Form.Label column sm="2" >
                        Food    
                        </Form.Label>
                        
                        <Form.Range
                            column sm="1"
                            //value={value}
                            // onChange={e => setValue(e.target.value)}
                        />
                        
                        
                    </Form.Group>
                </Form>
            </div>
            <div className='Gold d-flex  justify-content-center'>
            <Form>
                    <Form.Group as={Row}>
                        
                        <Form.Label column sm="1" >
                        <Form.Check/>
                        {/* defaultChecked={Checked}
                        //onChange={() => SetChecked(!Checked)} */}
                        </Form.Label>
                        <Form.Label column sm="2" >
                        Gold    
                        </Form.Label>
                        
                        <Form.Range
                            column sm="1"
                            //value={value}
                            // onChange={e => setValue(e.target.value)}
                        />
                        
                        
                    </Form.Group>
                </Form>        
            </div>
            
        </div>
        <div /*className='list'*/>
            <NewDataTable/>
        </div>
    </div>
  )
}

export default UnitFilter