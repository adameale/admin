import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import "./userList.css" 
import { DeleteOutlined } from '@mui/icons-material';
import {userRows}  from '../../dummyData'
import { Link } from 'react-router-dom';
function UserList() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { 
            field: 'user', headerName: 'User', width: 150, renderCell:(params)=>{
           return(
            <div className="userListUser">
                <img className='userListImg' src={params.row.avatar} alt="" />
                {params.row.Username}
            </div>
           )
        }},
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction volume',
            width: 160,
          },

          {
            field: 'action',
            headerName: 'Action',
            width: 150, renderCell:(params)=>{
                return(
                    <>
                    <Link to={"/user/+params.row.id"}>
                <button className='userListEdit'>Edit</button>
                </Link>
                <DeleteOutlined className='userListDelete'/>
                </>
                )
            }
          }
      ];
     
      
  return (
    <div className='userList'>
      <DataGrid disableRowSelectionOnClick
        rows={userRows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default UserList
