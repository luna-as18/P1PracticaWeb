import React from 'react';
import Table from 'react-bootstrap/Table';
import { FormattedMessage } from 'react-intl';

function RoomDetail({ devices }) {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th><FormattedMessage id="Device"/></th>
            <th><FormattedMessage id="Value"/></th>
          </tr>
        </thead>
        <tbody>
          {devices.map((device, index) => (
            <tr key={device.id}>
              <td>{index + 1}</td>
              <td>{device.id}</td>
              <td>{device.name}</td>
              <td>{device.desired.value}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default RoomDetail;


