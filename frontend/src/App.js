import React from 'react';
import { NavLink, Route } from 'react-router-dom'
import { Grid, PageHeader, Navbar, Nav, NavItem} from 'react-bootstrap'
import Main from './route'

const App = () => (
  <div>
    <Grid>
      <PageHeader>
        Frengky University <small> Collegar Data </small>
      </PageHeader>
    </Grid>
    <Navbar>
      <Nav>
        <NavItem eventKey={1}>
          {/* <NavLink to='/'> */}
              Menu
          {/* </NavLink> */}
        </NavItem>
        
        <NavItem eventKey={2}>
        {/* <NavLink to='/about-us'> */}
            Menu
        {/* </NavLink> */}
        </NavItem>
      </Nav>
    </Navbar>

    <Main />
    
    <Grid>
      <hr />
      <footer className="footer">
        <div className="container">
          <p>Frengky Sofian &copy; 2018</p>
        </div>
      </footer>
    </Grid>
  </div>
)

export default App