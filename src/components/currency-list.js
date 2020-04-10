import React, { Component } from "react"
import Currency from "../components/currency"

export default class CurrencyList extends Component {
  state = {
      converter: {
        currency: 'ISK',
        factor: 0,
        amount: 0
      }
    }

  constructor (props) {
    super(props)

    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  componentDidMount() {

  }

  handleFieldChange(currency, factor, value) {

    this.setState({
        converter:
        {
            currency: currency,
            factor: factor,
            amount: value
        }
    })
  }

  render () {
    return (
    <div className="container">
        <div className="row mt-4 mb-5">
          {this.props.data.map(({ node }) => {
            return (
              <Currency
                data={node}
                key={node.shortName}
                converter={this.state.converter}
                onChange={this.handleFieldChange}
              />
            )
          })}
        </div>
      </div>
    )
  }
}
