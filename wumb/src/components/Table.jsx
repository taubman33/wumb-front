import React from 'react';
import { useTable } from "react-table";



export default function Table () {   


 return (
     <div className = "table-container">

<table >
  <tr>
    <th>Time</th>
    <th>Title</th>
    <th>Youtube Link</th>
  </tr>
  <tr className ="row row-even">
    <td>link 1</td>
    <td>link 1</td>
    <td>link 1</td>
  </tr>
  <tr classNamee="row row-odd">
    <td>link 2</td>
    <td>link 2</td>
    <td>link 2</td>
  </tr>
  <tr className ="row row-even">
    <td>link 3</td>
    <td>link 3</td>
    <td>link 3</td>
  </tr>
</table>


     </div>

    );
  }