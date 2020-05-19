import React from 'react'
import { Row, Col, Container,Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import {
    Link
  } from "react-router-dom";
const CardInfo = ({img, title, detail, btnD, btnE, btnB}) => {
    return (
        <Card>
            <CardImg top width="100%" src="https://znews-photo.zadn.vn/w1024/Uploaded/kbd_bcvi/2019_11_23/5d828d976f24eb1a752053b5.jpg" alt="Card image cap" />
            <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardText>{detail}</CardText>
            <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
            <Button onClick={btnB} color="primary">Booking</Button>{' '}
            <Link to={{
                pathname: "/updateHotel",
                search: `id=${btnE}`,
            }}>
                <Button color="info">Update</Button>{' '}
            </Link>
            <Button onClick={btnD} color="warning">Delete</Button>{' '}
            </CardBody>
        </Card>
    )
}

export default CardInfo;