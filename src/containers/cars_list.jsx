import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCars } from '../actions';

class CarsList extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.garage);
  }

  render() {
    const { cars } = this.props;

    const styles = {
      paddingBottom: 30,
      borderTop: '1px solid rgb(190, 190, 190)'
    };

    const styleCard = {
      margin: '30px 0'
    };

    return (
      <div>
        <div className="display-flex">
          <h2 >Car List</h2>
          <Link className="btn btn-primary" to="/cars/new">Create new car </Link>
        </div>
        <div className="cards" style={styles}>
          { cars.map((car) => {
            return (
              <Link to={`/cars/${car.id}`} key={car.id} className="link">
                <div className="card-product" style={styleCard}>
                  <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg" alt="SkateBord" />
                  <div className="card-product-infos">
                    <h2>{car.brand}</h2>
                    <p>{car.model}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { fetchCars },
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
