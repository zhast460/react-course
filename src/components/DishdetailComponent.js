import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish) {
            return (
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
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            );
        } else {
            return <div></div>;
        }
    }

    renderComments(comments) {
        if (comments) {
            const formatter = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
            return (
                <ul className="list-unstyled">
                    {comments.map(c =>
                        <li>
                            <p>{c.comment}</p>
                            <p>-- {c.author} , {formatter.format(new Date(c.date))}</p>
                        </li>)}
                </ul>

            );
        } else {
            return <div></div>;
        }
    }

    render() {
        return this.renderDish(this.props.dish);
    }
}

export default DishDetail;