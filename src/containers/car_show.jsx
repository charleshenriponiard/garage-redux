import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchCar } from '../actions';
import { deleteCar } from '../actions';


class CarShow extends Component {
  componentWillMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  handleClick = (e) => {
    console.log(e, 'Click');
    this.props.deleteCar(this.props.match.params.id,(car) => {
      this.props.history.push('/');
      return car;
    });
  }


  render() {
    const { car } = this.props;
    const styles = {
      margin: 20
    };

    if (!car) {
      return <p>loading ...</p>;
    }

    return (
      <div className="" style={styles}>
        <h1>{car.brand}</h1>
        <p>{car.model}</p>
        <p>{car.owner}</p>
        <p>{car.plate}</p>
        <Link className="btn btn-primary" to="/">back</Link>
        <button className="btn btn-danger" onClick={this.handleClick}>
          supprimer
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { fetchCar, deleteCar },
    dispatch
  );
};

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find(p => p.id === idFromUrl);
  return { car };
}
export default connect(mapStateToProps, mapDispatchToProps)(CarShow);
