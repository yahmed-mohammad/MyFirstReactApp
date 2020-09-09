import React from 'react';
import {Card, CardImg, CardText,  CardBody, CardTitle} from 'reactstrap';

function DishDetail({selectedDish}) {
    const comments = selectedDish.comments.map((comment) => {
        return(
            <div key={comment.id}>
                    <CardText>{comment.comment}</CardText>
                    <CardText>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</CardText>
                    <CardText></CardText>
            </div>
        );
    });
        return(
            <div className="container">
                <div className="row">
                <div className="col-12 col-md-5 m-1">
                <Card>
                <CardImg width="100%" src={selectedDish.image} alt={selectedDish.name}/>
                <CardBody>
                    <CardTitle heading>{selectedDish.name}</CardTitle>
                    <CardText>{selectedDish.description}</CardText>
                </CardBody>
                </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <Card>
                       <CardBody>{comments}</CardBody>
                    </Card>
                </div>
            </div>
            </div>
        );
    }
export default DishDetail;