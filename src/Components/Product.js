import React from 'react';
import ImageCarousel from './ImageCarousel';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import '../css/cardStyle.css';

class Product extends React.Component {
  constructor (props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
    console.log(this.state.show)
  }

  render () {
    // let {images} = this.props.groups;
    return (
      <Col xs={12} lg={4}>
          <Card onClick={this.handleShow} title="See more images">
            <div className="title">
              {
                this.props.name.substring(this.props.name.indexOf('T'))
              }
            </div>
            <div className="priceContainer">
              <span className="price">
                {`$ ${this.props.priceRange.selling.high}`}
              </span>
            </div>
            <Card.Img variant="top" src={this.props.thumbnail.href} />
          </Card>
          {/*Code below is for modal with carousel*/}
          <ImageCarousel images={this.props.images} showContent={this.state.show} closeModal={this.handleClose}/>

      </Col>
    )
  }
}

export default Product;