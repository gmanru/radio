import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';

const { Header, Content, Footer } = Layout;

class CustomLayout extends React.Component {
    render() {
        return (
            <Layout className="layout" >
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '54px' }}
                    >

                        {
                            this.props.isAuthenticated ?

                                <Menu.Item key="2" onClick={this.props.logout}>
                                    Выход из аккаунта
                    </Menu.Item>

                                :

                                <Menu.Item key="2">
                                    <Link to="/login"><Icon style={{ fontSize: '24px', color: "dark" }} type="login" /></Link>
                                </Menu.Item>
                        }

                        <Menu.Item key="1">
                            <Link to="/"><Icon theme="twoTone" style={{ fontSize: '24px', color: "grey" }} type="book" /></Link>
                        </Menu.Item>


                        <Menu.Item key="3">
                            <Link to="/radio"><Icon theme="twoTone" style={{ fontSize: '24px', color: "grey" }} type="customer-service" /></Link>
                        </Menu.Item>


                        <Menu.Item key="4">
                            <Link to="/video_str"><Icon theme="twoTone" style={{ fontSize: '24px', color: "grey" }} type="video-camera" /> </Link>
                        </Menu.Item>

                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item><Link to="/"><Icon theme="twoTone" style={{ fontSize: '22px' }} type="home" /></Link></Breadcrumb.Item>

                    </Breadcrumb>
                    <div style={{ background: '#fff', padding: 0, minHeight: 280 }}>
                        {this.props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>

                </Footer>
            </Layout>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));