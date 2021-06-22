import React, { useMemo } from 'react';
import { useTable } from "react-table";



export default function Table () {   

  const data = React.useMemo(
    () => [
      {
        col1: '11:11',
        col2: 'Jerry Garcia',
        col3: 'Link.com/ienienwvrnvrknvq'
      },
      {
        col1: '11:15',
        col2: 'Jerry Gdddarcia',
        col3: 'Link.com/ienklmlmienwvrnvrknvq'
      },
      {
        col1: '11:18',
        col2: 'Jerry Garciaaa',
        col3: 'Link.com/ienienddssdwwvrnvrknvq'
      },
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Time',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Title',
        accessor: 'col2',
      },
      {
        Header: 'Youtube Link',
        accessor: 'col3',
      }
    ],
    []
  )

 const tableInstance = useTable({ columns, data })
 const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

return (
  // apply the table props
  <table {...getTableProps()}>
    <thead>
      {// Loop over the header rows
      headerGroups.map(headerGroup => (
        // Apply the header row props
        <tr {...headerGroup.getHeaderGroupProps()}>
          {// Loop over the headers in each row
          headerGroup.headers.map(column => (
            // Apply the header cell props
            <th {...column.getHeaderProps()}>
              {// Render the header
              column.render('Header')}
            </th>
          ))}
        </tr>
      ))}
    </thead>
    {/* Apply the table body props */}
    <tbody {...getTableBodyProps()}>
      {// Loop over the table rows
      rows.map(row => {
        // Prepare the row for display
        prepareRow(row)
        return (
          // Apply the row props
          <tr {...row.getRowProps()}>
            {// Loop over the rows cells
            row.cells.map(cell => {
              // Apply the cell props
              return (
                <td {...cell.getCellProps()}>
                  {// Render the cell contents
                  cell.render('Cell')}
                </td>
              )
            })}
          </tr>
        )
      })}
    </tbody>
  </table>
)
}