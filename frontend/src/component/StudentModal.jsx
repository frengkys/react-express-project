import React, { Component } from 'react';
import { Popover, Tooltip, Button, Modal, OverlayTrigger } from 'react-bootstrap';
import StudentForm from './StudentForm';

export default class StudentModal extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }

    submit(data){
      // this.props.login(data).then(()=> this.props.history.push('/'))
    }
  
    render() {
      return (
        <div>

        </div>
      );
    }
  }
  