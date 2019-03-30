import React, { Component } from 'react';
import './CurrencyList.css';

import axios from 'axios';

import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

class CurrencyList extends Component {
  state = {
    currencies: []
  }
  componentDidMount() {
    axios.get(`http://apis.is/currency/arion`)
      .then(res => {
        const currencies = res.data.results;

        for (var i=0; i < currencies.length; i++)
        {
          currencies[i].total = 0;
        }

        this.setState({ currencies });
      })
  }
  onChange(code, factor, event) {    
    var data = this.state.currencies;

    var inputVal = event.target.value.split('.').join("");
    inputVal = inputVal.replace(',', '.');


    for (var i=0; i < data.length; i++)
    {
      var val = 0;

      if (data[i].shortName === code)
      {
        data[i].total = event.target.value;
      }
      else
      {
        val = (Math.round(((inputVal * factor) / data[i].value)*100, 2))/100;

        if (val === 0)
        {
          data[i].total = '';
        }
        else if (!isNaN(val))
        {
          data[i].total = val.toLocaleString('DE');
        }
      }
    }

    this.setState({ currencies: data });
  }
  render() {
    return (
      <Table>
        <tbody>
        { this.state.currencies.map(currency =>
          <tr key={ currency.shortName }>
            <td>{currency.longName} ({currency.shortName})</td>
            <td>{currency.value.toLocaleString('DE')}</td>
            <td>
              <Form.Control type="text" value={ currency.total } onChange={this.onChange.bind(this, currency.shortName, currency.value)} />
            </td>
          </tr>
        )}
        </tbody>
      </Table>
    );
  }
}
export default CurrencyList;