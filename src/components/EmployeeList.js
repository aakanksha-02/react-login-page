import React from 'react';
import {Redirect} from 'react-router-dom';
import ReactTable from 'react-table';
import "react-table/react-table.css";

import employeeList from '../data/EmployeeList.json';

export default function EmployeeList(){
  if(!sessionStorage.getItem('userData')){
    return (<Redirect to={'/'}/>)
  }

  const { user } = employeeList;
  const data = user;
  const columns = [
    { Header: 'Id', accessor: 'id' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Age', accessor: 'age' },
    { Header: 'Gender', accessor: 'gender' },
    { Header: 'Email', accessor: 'email' },
    { Header: 'Phone No.', accessor: 'phoneNo' }
  ];
  
  return (
    <div className="employee-list">
      <h3 className="header">Employee List</h3>
      <ReactTable 
        data = { data }
        columns = { columns }
        defaultPageSize = {6}
      />
    </div>
  )
}
