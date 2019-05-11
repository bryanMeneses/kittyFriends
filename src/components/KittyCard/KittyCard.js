import React from 'react'
import { Card, Image, Col, ListGroup, ListGroupItem } from 'react-bootstrap'

const KittyCard = (props) => {

    const cardArray = props.kitties.map(kitty => {
        const { name, id, username, email, phone } = kitty;
        return (
            < Col key={id} xs="12" sm="12" md="5" lg="4" >
                <Card
                    border="secondary"
                    style={{ width: '18rem' }}
                    className="my-4">
                    <Card.Header style={{ fontSize: '1.4rem' }}>{name}
                    </Card.Header>
                    <div style={{ background: "linear-gradient(0.75turn, #3f87a6, #ebf8e1, #f69d3c)" }}>
                        <Image src={`https://robohash.org/${id}.png?set=set4`} style={{ width: '12rem', margin: '1rem auto' }} roundedCircle />
                    </div>

                    <ListGroup variant="flush">
                        <ListGroupItem>
                            @{username}
                        </ListGroupItem>
                        <ListGroupItem>
                            {email}
                        </ListGroupItem>
                        <ListGroupItem>
                            {phone}
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </Col >
        )
    });
    return (
        <React.Fragment>
            {cardArray}
        </React.Fragment>
    )
}

export default KittyCard