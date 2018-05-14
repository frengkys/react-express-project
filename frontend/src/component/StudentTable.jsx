import React, {Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { fetchProducts } from "../action/studentAction";
import { createStudent } from "../action/createStudentAction";

import { Grid, Row, Col, Jumbotron, Button, Table, Glyphicon, Modal } from 'react-bootstrap';
import StudentForm from './StudentForm';

class StudentTable extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false
        };
    }

    componentDidMount() {
        this.props.fetchProducts();
    }
    
    handleClose() {
        this.setState({ show: false });
    }
    
    handleShow() {
        this.setState({ show: true });
    }

    submit = data =>
        this.props.createStudent(data).then( () => window.location.reload() );
    

    render() {
        const { error, loading, products } = this.props;
        if (error) {
        return <div>Error! {error.message}</div>;
        }

        if (loading) {
        return <div>Loading...</div>;
        }
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
                    {products.map( (product,i) =>
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{product.student_no}</td>
                        <td>{product.name}</td>
                        <td>{product.email}</td>
                        <td>{product.telp}</td>
                        <td>{product.address}</td>
                        <td>{product.StudentStatus.status}</td>
                        <td>
                        <Button>
                        <Glyphicon glyph="pencil" title="Edit"/>
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
                    <StudentForm submit={this.submit}/>
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
    products: state.products.items,
    loading: state.products.loading,
    error: state.products.error,

    student: state.newstudent.items
});

// const mapDispatchToProps = dispatch => bindActionCreators({
//     fetchProducts,
//     createStudent,
//   }, dispatch)

// function mapDispatchToProps(dispatch) { return { dispatch, someActions: bindActionCreators({ ...someActions }, dispatch) } }


export default connect(mapStateToProps, {fetchProducts, createStudent})(StudentTable);
