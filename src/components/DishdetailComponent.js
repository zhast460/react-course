import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderComments({comments}) {
    if (comments) {
        const formatter = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
        return (
            <ul className="list-unstyled">
                {comments.map(c =>
                    <li key={c.id}>
                        <p>{c.comment}</p>
                        <p>-- {c.author} , {formatter.format(new Date(c.date))}</p>
                    </li>)}
            </ul>

        );
    } else {
        return <div></div>;
    }
}

const DishDetail = (props) => {
    const dish = props.dish
    if (dish) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <RenderComments comments={dish.comments} />
                    </div>
                </div>
            </div>
        );
    } else {
        return <div></div>;
    }
}

export default DishDetail;