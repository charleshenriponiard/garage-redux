import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions';
import { Link } from 'react-router-dom';

class CarNew extends Component {

  onSubmit = (values) => {
    this.props.createCar(values, (car) => {
      this.props.history.push('/');
      return car;
    });
  }

  renderField = (field) => {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        /> 
      </div>
    );
  }

  render() {
    const styles = {
      paddingTop: 30,
      borderTop: '1px solid rgb(190, 190, 190)'
    };

    return (
      <div>
        <div className="display-flex">
          <h2 >Create new car</h2>
          <Link className="btn btn-primary" to="/">Back </Link>
        </div>
        <form style={styles} onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            label="Brand"
            name="brand"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Model"
            name="model"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Owner"
            name="owner"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Plate"
            name="plate"
            type="text"
            component={this.renderField}
          />
          <button className="btn btn-primary" type="submit"
            disabled={this.props.pristine || this.props.submitting} 
          >
            Create Car
          </button>
        </form>
        <Link className="btn btn-light" to="/">Back </Link>
      </div>
    );
  }
}

export default reduxForm({ form: 'newCarForm' })(connect(null, { createCar })(CarNew));
