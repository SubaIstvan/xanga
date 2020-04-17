import React, {Component} from 'react';
import Logo from '../../../../assets/logoWhite.png';
import {Link} from "react-router-dom";
import './Header.css';

import {ButtonToolbar, Drawer, Icon, IconButton} from "rsuite";


class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.close = this.close.bind(this);
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    close() {
        this.setState({
            show: false
        });
    }

    toggleDrawer() {
        this.setState({show: true});
    }

    renderLinks() {
        return (
            <div id="menu_items" className="desktop">
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/location3">LOCATIONS</Link>
                <Link to="/projects">PROJECTS</Link>
                <Link to="/news">NEWS</Link>
                <Link to="/contact">CONTACT</Link>
            </div>
        )
    }

    renderDrawer() {
        return (
            <Drawer
                show={this.state.show}
                onHide={this.close}
                backdrop={true}
                placement={'left'}
                size={'xs'}
            >
                <Drawer.Header>
                    <img src={Logo} height={'50px'}/>
                </Drawer.Header>
                <Drawer.Body>
                    <div id="drawer-menu-items">
                        <Link to="/">HOME</Link>
                        <Link to="/about">ABOUT</Link>
                        <Link to="/location3">LOCATIONS</Link>
                        <Link to="/projects">PROJECTS</Link>
                        <Link to="/news">NEWS</Link>
                        <Link to="/contact">CONTACT</Link>
                    </div>
                </Drawer.Body>
            </Drawer>
        )
    }

    renderDrawerButton() {
        return (
            <div className="phone">
                <ButtonToolbar>
                    <IconButton icon={<Icon icon="align-justify"/>} onClick={this.toggleDrawer} size="md"/>
                </ButtonToolbar>
            </div>
        )
    }

    render() {
        return (
            <div id="menu_container">
                <div id="header_title">
                    <img src={Logo}/>
                </div>

                {this.renderDrawer()}

                {this.renderDrawerButton()}

                {this.renderLinks()}
            </div>
        );
    }
}

export default header;
