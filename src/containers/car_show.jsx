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
      <div className="center-card">
        <div className="card-trip">
          <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg" />
          <div className="card-trip-infos">
            <div>
              <h2>{car.brand}</h2>
              <p>{car.model}</p>
            </div>
            <h2 className="card-trip-pricing">{car.plate}</h2>
          </div>
          <div className="card-link">
            <Link className="btn btn-primary" style={{marginRight: 10}} to="/">back</Link>
            <button className="btn btn-danger" style={{marginRight: 10}} onClick={this.handleClick}>
              supprimer
            </button>
          </div>
          
        </div>
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
