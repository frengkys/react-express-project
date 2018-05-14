import React, { Component } from 'react'
import StudentTable from '../component/StudentTable'
import { Grid, Jumbotron, Button} from 'react-bootstrap'

class Home extends Component {
  render() {
    return (
        <Grid>
            <Jumbotron>
                <h1>Hello, There!</h1>
                <p>
                    This is a simple CRUD react application, this app is made with react, express, and sequelize to show or edit Collegar 
                    Data..<br /> Have Fun :D
                </p>
                <p>
                    <Button bsStyle="primary">Learn more</Button>
                </p>
            </Jumbotron>

            <StudentTable />
        </Grid>
    )
  }
}

export default Home