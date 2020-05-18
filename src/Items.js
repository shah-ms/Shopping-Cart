import React from 'react';
import {Button} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow'; 

class Items extends React.Component {
    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.delete = this.delete.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment(i) {
      let newObj = this.props.totalItems;
      newObj.counters[i] = this.props.totalItems.counters[i] + 1;
      if(newObj.counters[i] > 0) {
        document.getElementById('sub').setAttribute('disabled', 'disabled');
      }
      if(newObj.counters[i] === 1) {
        newObj.cartItems = this.props.totalItems.cartItems + 1;
      } 
      this.setState(newObj);
    }

    decrement(i) {
      let newObj = this.props.totalItems;
      
      if(newObj.counters[i] > 0) {
        newObj.counters[i] = this.props.totalItems.counters[i] - 1;
        
        if(newObj.counters[i] === 0) {
          newObj.cartItems = this.props.totalItems.cartItems - 1;
        }
      }

      this.setState(newObj);
    }

    delete(i) {
      let newObj = this.props.totalItems;
  
      if(newObj.counters[i] !== 0) {
        newObj.cartItems = this.state.cartItems - 1;
      }
  
      delete newObj.counters[i];
      
      if(newObj.cartItems < 0) {
        newObj.cartItems = 0;
      }

      if(Object.keys(this.props.totalItems.counters).length === 0) {
         document.getElementById('reset').disabled = true;
      }
      
      this.setState(newObj); 
    }

    reset() {
      let newObj = this.props.totalItems;
      newObj.cartItems = 0;

      Object.keys(newObj.counters).map((item) => 
        newObj.counters[item] = 0
      );

      this.setState(newObj);

    }

    render() {

      return (

        <div align="center">
        
          <h1 align="center">CartItems - {this.props.totalItems.cartItems}</h1>

          <TableContainer>
            <Table style={{width: 1200}} align="center" size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Items</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                  {Object.keys(this.props.totalItems.counters).map((item, index) => 
                  <TableRow key={index} align="center">
                    <TableCell component="th" scope="row" align="center">
                      {item} 
                    </TableCell>
                    <TableCell align="center">{this.props.totalItems.counters[item]}</TableCell>
                    <TableCell align="center">
                    <Button variant="contained" id="add" color="primary" onClick={() => this.increment(item)}>Add</Button> &nbsp;
                    <Button variant="contained" id="sub" color="secondary" onClick={() => this.decrement(item)}>Subtract</Button> &nbsp;
                    <IconButton aria-label="delete">
                    <DeleteIcon onClick={() => this.delete(item)}/>
                    </IconButton>
                    </TableCell>
                  </TableRow>)}
              </TableBody>

            </Table>
            <br></br>
          </TableContainer>

          <Button id="reset" variant="outlined" color="primary" onClick={() => this.reset()}>Reset</Button>

        </div>
        );
    }
}

export default Items;