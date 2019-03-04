import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from "react-bootstrap/es/Container";


export default class ProductsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <Container>
        <CardDeck>

              {this.props.children}
        </CardDeck>
      </Container>
    )
  }
}