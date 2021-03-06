import React, { Component } from 'react'
import Joi from 'joi'
import SingleInput from './singleInput'
import MultipleInput from './multipleInput'

class Form extends Component {
  state = {
    data: {},
    errors: {},
  }

  schema = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().max(70).required().label('Name'),
    emails: Joi.array().items(
      Joi.string()
        .allow(null, '')
        .email({ tlds: { allow: false } }) // allow emails with any top level domain
        .min(4)
        .max(320)
        .label('Email')
    ),
    phones: Joi.array().items(
      Joi.string().allow(null, '').max(20).label('Phone')
    ),
  })

  validateField = ({ name, value }) => {
    const schemaForField = Joi.object({ [name]: this.schema.extract(name) })
    // for example => {name: Joi.string().label('Name')}

    let fieldToValidate = {}
    if (name === 'name') {
      fieldToValidate = { [name]: value } // for example => {name: 'John Smith'}
    } else {
      fieldToValidate = { [name]: [value] } // for example => {emails: ['john@gmail.com']}
    }

    const { error } = schemaForField.validate(fieldToValidate)
    return error ? error.details[0].message : null
  }

  validateForm = () => {
    const options = { abortEarly: false }
    const result = this.schema.validate(this.state.data, options)
    if (!result.error) return null

    const errors = {}
    for (let item of result.error.details) errors[item.path[0]] = item.message
    return errors
  }

  handleChange = ({ currentTarget: input }, index) => {
    const errors = { ...this.state.errors }
    const errorMessage = this.validateField(input)
    if (errorMessage) errors[input.name] = errorMessage
    else delete errors[input.name]

    const data = { ...this.state.data }
    const { name, value } = input
    // for name
    if (typeof data[name] === 'string') {
      data.name = value
    } else {
      // for emails and phones
      data[name][index] = value
    }
    this.setState({ data, errors })
  }

  handleInputDelete = (e, index) => {
    e.preventDefault()
    const data = { ...this.state.data }
    const name = e.currentTarget.name
    data[name].splice(index, 1)
    this.setState({ data })
  }

  handleAddNewInput = (e) => {
    e.preventDefault()
    const data = { ...this.state.data }
    const name = e.currentTarget.name
    data[name].push('')
    this.setState({ data })
  }

  renderSingleInput = (name, label, type = 'text') => {
    const { data, errors } = this.state

    return (
      <SingleInput
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    )
  }

  renderMultipleInput = (name, label, type = 'text') => {
    const { data, errors } = this.state

    return (
      <MultipleInput
        arrayData={data[name]}
        type={type}
        name={name}
        label={label}
        onChange={this.handleChange}
        onInputDelete={this.handleInputDelete}
        onAddNewInput={this.handleAddNewInput}
        error={errors[name]}
      />
    )
  }

  renderSubmitButton = () => (
    <button
      disabled={this.validateForm()}
      type='submit'
      className='btn btn-primary'
    >
      Save
    </button>
  )

  renderCancelButton = () => (
    <button
      onClick={(event) => this.props.onContactFormClose(event.preventDefault())}
      className='btn btn-secondary'
    >
      Cancel
    </button>
  )
}

export default Form
