import React, { Component } from "react";
import "./TopNavigation.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink  } from "react-router-dom";
// import logo1 from "../../asset/images/talukder-group01.png";
// import logo2 from "../../asset/images/talukder-group02.png";
import talukderLogo from "../../asset/images/talukderLogo.png";
import Card from "react-bootstrap/Card";
import { AiOutlineCaretDown } from "react-icons/ai";
// import { Scrollbars } from 'react-custom-scrollbars';


class TopNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navTitle: "navbarTitle",
      navBackgroundColor: "navigation",
      navbarItem: "navItem",
      navVariant: "dark",
      pageTitle: props.title,
      portfolioDropdownOpen: false,
    };
  }

  onScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        navTitle: "navbarTitleScroll",
        navBackgroundColor: "navigationScroll",
        navbarItem: "navItemScroll",
        navVariant: "light",
      });
    } else if (window.scrollY < 100) {
      this.setState({
        navTitle: "navbarTitle",
        navBackgroundColor: "navigation",
        navbarItem: "navItem",
        navVariant: "dark",
      });
    }
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.onScroll);
  };

  refresh = () => {
    window.location.reload(true);
  }

  render() {
    return (
      <>
        <title>{this.state.pageTitle}</title>
        <Navbar
          className={this.state.navBackgroundColor}
          fixed="top"
          collapseOnSelect
          expand="lg"
          variant={this.state.navVariant}
        >
          <Link to="/">
            <Navbar.Brand className={this.state.navTitle} href="#home">
              <Card.Img className="logo" variant="top" src={talukderLogo} />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              {/* Home */}

              <Nav.Link>
                <NavLink className={this.state.navbarItem} to="/" activeClassName="active to-empty">
                  {" "}
                  Home
                </NavLink>
              </Nav.Link>

              {/* Portfolio */}

              <Nav.Link>
                <div className="dropdown">
                  <a className={this.state.navbarItem} to="#" activeClassName="active to-empty"
                   onClick={() =>
                    this.setState((prevState) => ({
                      portfolioDropdownOpen: !prevState.portfolioDropdownOpen,
                    }))
                  }
                  >
                    Portfolio
                    <AiOutlineCaretDown />
                  </a>
                  <div className="dropdown-content">
                    <NavLink to="/portfolio/gallery">Gallery</NavLink>
                    <NavLink to="/portfolio/achievement">Achivement</NavLink>
                  </div>
                </div>
              </Nav.Link>

              {/* Product & services */}

              <Nav.Link>
                <div className="dropdown">
                  <a className={this.state.navbarItem} to="" activeClassName="active to-empty"
                  
                  >
                    Product & services
                    <AiOutlineCaretDown />
                  </a>
                  <div className="dropdown-content">
                    <NavLink to="/product&services/advertisement">
                      Advertisement
                    </NavLink>
                    <NavLink to="/portfolio">
                      Product Gallery
                    </NavLink>
                  </div>
                </div>
              </Nav.Link>

              {/* Our clients */}

              <Nav.Link>
                <div className="dropdown">
                  <a className={this.state.navbarItem} to="" activeClassName="active to-empty"
                   onClick={() =>
                    this.setState((prevState) => ({
                      portfolioDropdownOpen: !prevState.portfolioDropdownOpen,
                    }))
                  }
                  >
                    Our clients
                    <AiOutlineCaretDown />
                  </a>
                  <div className="dropdown-content">
                    <NavLink to="/client/corporateClient">
                      Corporate client
                    </NavLink>
                    {/* <NavLink to="/client/localClient">Local client</NavLink> */}
                  </div>
                </div>
              </Nav.Link>

              {/* career */}

              <Nav.Link>
                <NavLink className={this.state.navbarItem} to="/career">
                  career
                </NavLink>
              </Nav.Link>

              {/* About Us */}

              <Nav.Link>
                <div className="dropdown">
                  <a className={this.state.navbarItem} to="" activeClassName="active to-empty"
                   onClick={() =>
                    this.setState((prevState) => ({
                      portfolioDropdownOpen: !prevState.portfolioDropdownOpen,
                    }))
                  }
                  >
                    About Us
                    <AiOutlineCaretDown />
                  </a>
                  <div className="dropdown-content">
                    <NavLink to="/about/director"> Board of director</NavLink>
                    <NavLink to="/about/managementTeam">
                      {" "}
                      Management Team
                    </NavLink>
                    <NavLink to="/about/chairman-message">
                      {" "}
                      Message from chairman
                    </NavLink>
                    <NavLink to="/about/md-message"> Message from md</NavLink>
                  </div>
                </div>
              </Nav.Link>

              {/* Contact */}

              <Nav.Link>
                <NavLink className={this.state.navbarItem} to="/contact">
                  Contact
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default TopNavigation;
