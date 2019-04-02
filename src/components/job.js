import React from 'react';
import { FormattedDate, FormattedNumber, FormattedPlural, FormattedRelative } from 'react-intl';

export default class Job extends React.Component {

    render() {
        return (
            <tr>
              <th scope="row">{this.props.offer.id}</th>
              <td>{this.props.offer.name}</td>
              <td>{this.props.offer.company}</td>
              <td>
                {this.props.offer.salary}
                <span>&nbsp;</span>
                <FormattedPlural
                    value={this.props.offer.salary}
                    one='million'
                    other='millions'/>
              </td>
              <td>{this.props.offer.city}</td>
              <td>
                <FormattedDate
                  value={new Date(this.props.offer.date)}
                  year='numeric'
                  month='long'
                  day='numeric'
                  weekday='long'/>
                  <span>&nbsp;</span>
                  (<FormattedRelative value={new Date(this.props.offer.date)}/>)
              </td>
              <td><FormattedNumber value={this.props.offer.views}/></td>
            </tr>
        );
    }
}