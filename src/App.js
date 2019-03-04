import React from 'react';
import ProductsPage from './Components/ProductsPage';
import Product from './Components/Product';
import Navbar from 'react-bootstrap/Navbar';
import {svgLogo} from './content';
import './css/appStyling.css';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      groups: []
    }
  }


  componentDidMount () {
    fetch('index.json', {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }

    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.id);
        let {groups} = responseJson;
        this.setState({groups: groups})
      });
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log(this.state.groups)
  }



  render () {
    const {groups} = this.state;

    return (
      <div>
        <Navbar className="justify-content-center">
          <Navbar.Brand href="#home"><img alt='West Elm Logo' src={svgLogo.src} /></Navbar.Brand>
        </Navbar>
        <ProductsPage>
          {groups.map(x => (
            <Product key={x.id} {...x} />
          ))}
        </ProductsPage>
      </div>
    )
  }

}

