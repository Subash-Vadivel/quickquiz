import React, { useState } from 'react';
import {Table} from 'react-bootstrap'
import './sb.css'
import { Button } from 'react-bootstrap';
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  }
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
    <label style={{float:"left",textAlign:"center"}}>Question Status</label> &nbsp;
      <span tyle={{float:"left"}} class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Question Status</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
      <br/>
      <Table className="my-table">
      <tbody>
        <tr>
          <td style={{textAlign:"center"}}><Button variant="warning" className='sb'><span>1</span></Button></td>
          <td style={{textAlign:"center"}}><Button variant="warning" className='sb'><span>2</span></Button></td>
          <td style={{textAlign:"center"}}><Button variant="warning" className='sb'><span>3</span></Button></td>
        </tr>
        <tr>
        <td style={{textAlign:"center"}}><Button variant="warning" className='sb'><span>4</span></Button></td>
        <td style={{textAlign:"center"}}><Button variant="warning" className='sb'><span>5</span></Button></td>
        <td style={{textAlign:"center"}}><Button variant="warning" className='sb'><span>6</span></Button></td>
        </tr>
        <tr>
        <td style={{textAlign:"center"}}><Button variant="warning" className='sb'><span>7</span></Button></td>
          <td style={{textAlign:"center"}}><Button variant="warning" className='sb'><span>8</span></Button></td>
          <td style={{textAlign:"center"}}><Button variant="warning" className='sb'><span>9</span></Button></td>
        </tr>
        <tr>
        <td style={{textAlign:"center"}}><Button variant="warning" className='sb'><span>10</span></Button></td>
        <td style={{textAlign:"center"}}><Button variant="warning" className='sb'><span>11</span></Button></td>
        <td style={{textAlign:"center"}}><Button variant="warning" className='sb'><span>12</span></Button></td>
        </tr>
        <tr>
        <td style={{textAlign:"center"}}><Button variant="warning" className='sb'><span>13</span></Button></td>
          <td style={{textAlign:"center"}}><Button variant="warning" className='sb'><span>14</span></Button></td>
          <td style={{textAlign:"center"}}><Button variant="warning" className='sb'><span>15</span></Button></td>
        </tr>
      </tbody>
    </Table>
      </div>
    </div>
  </div>
</nav>

  )
}