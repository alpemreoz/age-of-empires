import React from 'react'

function filters() {
  return (
    <div>
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
            
        </div>
    </div>
  )
}

export default filters