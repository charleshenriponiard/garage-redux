import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { fetchCars } from '../actions';
import { Link } from 'react-router-dom';


class CarsList extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.garage);
  }

  render() {
    const { cars } = this.props;
    const styles = {
      paddingBottom: 30,
      borderBottom: '1px solid grey'
    };
    return (
      <div>
        <Link className="btn btn-primary" to="/cars/new">Créer un garage </Link>
        <div className="cards">
          <h2 style={styles}>Car List </h2>
          { cars.map(car => {
           return(
            <Link to={`/cars/${car.id}`} key={car.id}>
              <div className="card-product" style={styles}>
                <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg" />
                <div className="card-product-infos">
                  <h2>{car.brand}</h2>
                  <p>{car.model}</p>
                </div>
              </div>
            </Link>
           ) 
          }) }
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { fetchCars: fetchCars },
    dispatch
  );
};


const mapStateToProps = (state) => {
  return {
    cars: state.cars,
    garage: state.garage
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarsList);