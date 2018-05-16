import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Col, Form, Button, Checkbox } from 'react-bootstrap'
import { statusStudent } from '../action/statusStudentAction'

class StudentForm extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
          data: {
              student_no: '',
              name: '',
              email: '',
              telp: '',
              address: '',
              status: '',
            },
        }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        this.props.statusStudent();
    }
  
    handleChange(e) {
        this.setState({
            data: {
            ...this.state.data, [e.target.name]: e.target.value
            }
        });
        console.log(this.state);
    }

    handleSubmit(e) {
        e.preventDefault();
        // // this.setState({ submitted: true });
        console.log('s ', this.state);
        // if (Object.keys(errors).length === 0 ) {
        this.props.submit(this.state.data);
        // }
      }
  
    render() {
    const { error, loading, status, data } = this.props;
      return (
          <Form horizontal onSubmit={this.handleSubmit}>
          
            <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                Student No
                </Col>
                <Col sm={10}>
                <FormControl name="student_no" type="text" placeholder="Student No" onChange={this.handleChange} value={data ? data.student_no : null} />
                </Col>
            </FormGroup>
          
            <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                Name
                </Col>
                <Col sm={10}>
                <FormControl name="name" type="text" placeholder="Name" onChange={this.handleChange} value={data ? data.name : null} />
                </Col>
            </FormGroup>
          
            <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                Email
                </Col>
                <Col sm={10}>
                <FormControl name="email" type="email" placeholder="Email" onChange={this.handleChange} value={data ? data.email : null}/>
                </Col>
            </FormGroup>
          
            <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                Telp
                </Col>
                <Col sm={10}>
                <FormControl name="telp" type="text" placeholder="Telp" onChange={this.handleChange}  value={data ? data.telp : null}/>
                </Col>
            </FormGroup>
          
            <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                Address
                </Col>
                <Col sm={10}>
                <FormControl name="address" type="text" placeholder="Address" onChange={this.handleChange} value={data ? data.address : null}/>
                </Col>
            </FormGroup>
          
            <FormGroup controlId="formControlsSelect">
                <Col componentClass={ControlLabel} sm={2}>
                    Status
                </Col>
                <Col sm={10}>
                <FormControl name="status" componentClass="select" placeholder="select" onChange={this.handleChange} value={data ? data.status : null}>
                    <option value="select">select</option>
                    {
                        status && status.map( (s,i) => 
                        <option key={s.id} value={s.id}>{s.status}</option>
                    )}
                </FormControl>
                </Col>
            </FormGroup>

            <FormGroup>
            <Col smOffset={10} sm={2}>
                <Button type="submit" className="btn btn-primary">Submit</Button>
            </Col>
            </FormGroup>
            </Form>
      );
    }
  }

const mapStateToProps = state => ({
    status: state.status.items,
    loading: state.status.loading,
    error: state.status.error,
});

export default connect(mapStateToProps, { statusStudent })(StudentForm);
  