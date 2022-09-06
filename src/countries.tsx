import React from "react";
import { useEffect,useState } from "react";
import { Image,Card,Col,Row,Container,Form,InputGroup,Button, Collapse } from "react-bootstrap";
export default function Countries(){
    const [countries,setCountries] = useState<any[]>([])
    useEffect(() => {

        fetch('https://restcountries.com/v3.1/all')
        .then((response) => response.json())
        .then((result) => setCountries(result))



},[])
    return(
        <div style={{backgroundColor:'black'}}>
          <h1 className="mt-5 ms-5" style={{color:'white', position:'absolute'}}>all of the worlds Countries</h1>
           <Image alt="earth" fluid src="https://cdn.mos.cms.futurecdn.net/xcLR5HMU2kxskdAy3ZVuTf.jpg"/>
           <Search/>
           <br/>
        <Container fluid>
            <Row className='g-4' sm={1} md={2} lg={4}>
        {countries.map((data) => (
            <Col>
            <Card bg='dark'>
             <Image className="card-img-top" style={{width:'100%',height:'100%'}} src={data.flags.png} alt='flag'/>
            <Card.Body>
                <Card.Title style={{color:'white'}}> 
                    {data.name.common}
                </Card.Title>
            </Card.Body>
            </Card>
            </Col>

        ))}
        </Row>
    </Container>
        </div>
    );
}

function Search(){
    
    const [search,setSearch] = useState('')
    const [data,setData] = useState<any[]>([])
    const [open,setOpen] = useState(false)
    const getSearch = () => {

       fetch(`https://restcountries.com/v3.1/name/${search}`)
       .then((response) => { if (!response.ok) {
        alert('not a good search')
        throw new Error('network not okay');
        console.log('there was a error')
        
       }
       return response.json()
    })
    .then((result) => setData(result))
    setOpen(true)
    }
    return(

        <div>
             <InputGroup className="mb-3 w-50 mx-auto">
        <Button onClick={(getSearch)} variant="primary" id="button-addon1" type="submit" >
          Button
        </Button>
        <Form.Control
        value={search}
        onChange={(e) => setSearch(e.target.value)}
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
        />
          </InputGroup>
          <br/>
          <Collapse in={open}>
          <div>
            <Container fluid>
                <Row xs={1} md={2} lg={4} className='g-4'>
            {data.map((country) => (
                <Col>
                <Card bg='dark'>
                <Image src={country.flags.png} alt='flag' style={{height:'100%',width:'100%'}}/>
                <Card.Body>
                    <Card.Title style={{color:'white'}}>
                        {country.name.common}
                    </Card.Title>
                </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
            </Container>
          </div>
          </Collapse>
        </div>

    );
}