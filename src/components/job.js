import React from "react";
import {FormattedDate} from 'react-intl';
import { FormattedNumber } from "react-intl";
import { FormattedMessage } from "react-intl";

const Job = (props) => {
  return (
    <tr>
      <td>{props.offer.id}</td>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{props.offer.salary}</td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'/>
      </td>
      <td><FormattedNumber value = {props.offer.views}/> <FormattedMessage id="Million"/> </td>
    </tr>
  );
};

export default Job;
