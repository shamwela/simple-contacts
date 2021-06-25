import React, { Component } from 'react';
import Joi from 'joi';
import SingleInput from './singleInput';
import MultipleInput from './multipleInput';
import './form.css';

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  // FIX THIS LATER!!!
  // FIX THIS LATER!!!
  // FIX THIS LATER!!!
  validateForm = () => {
    const options = { abortEarly: false };
    const result = this.schema.validate(this.state.data, options);
    console.log('result', result);

    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  // FIX THIS LATER!!!
  // FIX THIS LATER!!!
  // FIX THIS LATER!!!

  handleChange = (e, index) => {
    const data = { ...this.state.data };
    const { name, value } = e.target;
    // for name
    if (typeof data[name] === 'string') {
      data.name = value;
    } else {
      // for emails and phones
      data[name][index] = value;
    }
    this.setState({ data });
  };

  handleInputDelete = (e, index) => {
    e.preventDefault();
    const data = { ...this.state.data };
    const name = e.target.name;
    data[name].splice(index, 1);
    this.setState({ data });
  };

  handleAddNewInput = (e) => {
    e.preventDefault();
    const data = { ...this.state.data };
    const name = e.target.name;
    data[name].push('');
    this.setState({ data });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validateForm();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.props.onSaveContact(this.state.data);
  };

  renderSingleInput = (name, label, type = 'text') => {
    const { data, errors } = this.state;

    return (
      <SingleInput
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };

  renderMultipleInput = (nestedData, name, label, type = 'text') => {
    const { data, errors } = this.state;

    return (
      <MultipleInput
        nestedData={nestedData}
        type={type}
        name={name}
        label={label}
        onChange={this.handleChange}
        onInputDelete={this.handleInputDelete}
        onAddNewInput={this.handleAddNewInput}
        error={errors[name]}
      />
    );
  };
}

export default Form;
