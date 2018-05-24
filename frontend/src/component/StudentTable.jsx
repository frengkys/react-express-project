import React, {Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { fetchStudents } from "../action/studentAction";
import { createStudent } from "../action/createStudentAction";

import { Grid, Row, Col, Jumbotron, Button, Table, Glyphicon, Modal } from 'react-bootstrap';
import StudentForm from './StudentForm';

class StudentTable extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.submit = this.submit.bind(this);
    
        this.state = {
            data: {},
            table: [],
            show: false,
        };
    }

    componentWillMount() {
        this.props.fetchStudents();
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps ', nextProps)
        console.log('componentWillReceiveProps table ', this.state.table)
        this.setState({ table : nextProps.students })
    }

    componentDidMount() {
        const { students } = this.props
        students && console.log('componentDidMount ', students)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate prevProps ',prevProps)
        console.log('componentDidUpdate prevState ',prevState)
        console.log('componentDidUpdate snap ',snapshot)
    }
    
    handleClose() {
        this.setState({ show: false });
    }
    
    handleShow() {
        this.setState({
            data : null
        })
        this.setState({ show: true });
    }

    handleShowEdit(i){
        const { students } = this.props
        students && this.setState({ 
        data: {
            student_no: students[i].student_no,
            name: students[i].name,
            email: students[i].email,
            telp: students[i].telp,
            address: students[i].address,
            status: students[i].statusId,
        },
        show:true })
    }

    // submit = data =>
    //     this.props.createStudent(data).then( () => window.location.reload() );
    
    submit(data) {
        this.props.createStudent(data).then( (res) => {
            this.handleClose()
            // res['StudentStatus']= res.StudentStatus.status
            let newTable = this.state.table.concat(res)
            this.setState({ table: newTable })  
            console.log('submit dor ',this.state.table)
            console.log('submit dor ',res)
        } );
        // this.props.createStudent(data);
    }

    render() {
        const { error, loading, students } = this.props;
        const { table } = this.state;
        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        students && console.log('render ',students)
        console.log('render table ', this.state.table)
        return (
        <div className="show-grid">
            <hr />
            <Row>
                <Col lg={12}> 
                    <div className="pull-right">
                        < Button bsStyle="primary" className="mb-10" onClick={this.handleShow}>Input New</Button>
                    </div>
                </Col>
            </Row>
            <Table striped bordered condensed hover responsive>
                <thead>
                <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">Student Id</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">Telp</th>
                    <th className="text-center">Address</th>
                    <th className="text-center">Status</th>
                    <th className="text-center"> Action </th>
                </tr>
                </thead>
                <tbody>
                    {table.map( (student,i) =>
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{student.student_no}</td>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.telp}</td>
                        <td>{student.address}</td>
                        <td>
                        {/* {student.StudentStatus.status} */}
                        </td>
                        <td>
                        <Button>
                            <Glyphicon glyph="pencil" onClick={() => this.handleShowEdit(i)} title="Edit"/>
                        </Button>
                        <Button>
                            <Glyphicon glyph="trash" title="Delete"/>
                        </Button>
                        </td>
                    </tr>
                    )}
                </tbody>
            </Table>
            {/* <Button bsStyle="primary" className="pull-right">Input New</Button> */}
            <Button bsStyle="primary" className="pull-right" onClick={this.handleShow}>Input New</Button>
  
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Student Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <StudentForm data={this.state.data} submit={this.submit}/>
                </Modal.Body>
                {/* <Modal.Footer>
                <Button onClick={this.handleClose}>Close</Button>
                <Button bsStyle="primary" type="submit" onSubmit={this.submit}>Save changes</Button>
                </Modal.Footer> */}
            </Modal>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    students: state.students.items,
    loading: state.students.loading,
    error: state.students.error,
});

// const mapDispatchToProps = dispatch => bindActionCreators({
//     fetchProducts,
//     createStudent,
//   }, dispatch)

// function mapDispatchToProps(dispatch) { return { dispatch, someActions: bindActionCreators({ ...someActions }, dispatch) } }


export default connect(mapStateToProps, {fetchStudents, createStudent})(StudentTable);
