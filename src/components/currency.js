import React, { Component } from "react"

export default class Currency extends Component {
  state = {
    converter: {},
    value: ''
  }

  static getDerivedStateFromProps(props, state) {
    // Re-run the filter whenever the list array or filter text change.
    // Note we need to store prevPropsList and prevFilterText to detect changes.
    if (
      props.converter !== state.converter
    ) {
      return {
        converter: props.converter
      };
    }
    return null;
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });

    var val = e.target.value.split('.').join("").replace(',', '.');
    if (!isNaN(val))
    {
      val = parseFloat(val);
    }
    else
    {
      val = 0;
    }
    

    this.props.onChange(this.props.data.shortName, this.props.data.value, val);
  };

  render () {
    if (!isNaN(this.state.converter.amount) && this.state.converter.amount > 0 && this.props.data.shortName !== this.state.converter.currency)
    {

      var val = (Math.round(((this.state.converter.amount * this.state.converter.factor) / this.props.data.value)*100, 2))/100;

      if (val === 0)
      {
        if (this.state.value !== '')
        {
          this.setState({ value: '' });
        }
        
      }
      else if (!isNaN(val))
      {
        if (this.state.value !== val.toLocaleString('DE'))
        {
          this.setState({ value: val.toLocaleString('DE') });
        }
        
      }
    }
    else if (this.props.data.shortName !== this.state.converter.currency)
    {
      if (this.state.value !== '')
      {
        this.setState({ value: '' });
      }
      
    }
    
    return (
      <div className="col-12">
      <div className="card my-1" data-currency={this.props.data.shortName}>
        <div className="card-body d-flex flex-row justify-content-between align-content-center">
          <h2 className="card-title mb-0 flex-grow-1">{this.props.data.longName} <small>{this.props.data.shortName}</small></h2>
          <div className="currency-price">{ (this.props.data.value === 1 ? '' : this.props.data.value.toLocaleString('DE', { minimumFractionDigits: 2, maximumFractionDigits: 2})) }</div>
          <div className="currency-field">
            <input type="text" value={this.state.value} onChange={this.handleChange}></input>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
