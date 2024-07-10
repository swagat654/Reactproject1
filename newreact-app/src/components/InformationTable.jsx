import React from 'react';
import './InformationTable.css';

const InformationTable = () => {
  return (
    <div className="info-table-container">
      <table className="info-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Swagat Kumar</td>
            <td>
            <div>
            <strong>Mobile number:</strong>{' '}
            <a href="tel:+1987654321">+1987654321</a>
              </div>
              <div>
              <strong>Email id:</strong>{' '}
              <a href="mailto:xyz@example.com">xyz@example.com</a>
              </div>
              <div>
                <strong>Blood Group:</strong> O+
              </div>
            </td>
          </tr>
          <tr>
            <td>Amit Ranjan</td>
            <td>
              <div>
              <strong>Mobile number:</strong>{' '}
              <a href="tel:+1987654321">+1987654321</a>
              </div>
              <div>
              <strong>Email id:</strong>{' '}
              <a href="mailto:xyz@example.com">xyz@example.com</a>
              </div>
              <div>
                <strong>Blood Group:</strong> B
              </div>
            </td>
          </tr>
          <td>Harsh Verma</td>
            <td>
              <div>
              <strong>Mobile number:</strong>{' '}
              <a href="tel:+1987654321">+1987654321</a>
              </div>
              <div>
              <strong>Email id:</strong>{' '}
              <a href="mailto:xyz@example.com">xyz@example.com</a>
              </div>
              <div>
                <strong>Blood Group:</strong> A
              </div>
            </td>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default InformationTable;
