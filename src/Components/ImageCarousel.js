import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../css/modalCarouselStyling.css';


class ImageCarousel extends React.Component {
  constructor (props, context) {
    super(props, context);

    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: this.props.showContent,
      images: []
    };
  }

  handleClose() {
    this.setState({ show: false });
  }


  render () {
    return (
      <Modal {...this.props} show={this.props.showContent} onHide={this.props.closeModal} centered>
        <Modal.Header className='title' closeButton/>
        <Container>
          <Row className="show-grid">
            <Col xs={12}>
              <Carousel indicators='true'>
                  {this.props.images.map(image => (
                      <img alt={image.index} key={image.index} src={image.href}/>
                  ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </Modal>
    )
  }
}

export default ImageCarousel;