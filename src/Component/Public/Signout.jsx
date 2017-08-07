import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {NavLink as Link } from 'react-router-dom';
import { connect } from 'react-redux';
import action from '../../Action/Index';
import { Tool, merged } from '../../Tool';
import { DataLoad, DataNull, Header, TipMsgSignin, Footer } from '../common/index';
import './Signout.scss';
/**
 * 模块入口
 * 
 * @class Main
 * @extends {Component}
 */
class Main extends Component {
    constructor(props) {
        super(props);
        this.signout = () => {
            this.props.signin();
            this.context.router.history.replace({ pathname: '/' });
        }

    }
    render() {
        return (
            <div>
                <Header title="退出" leftIcon="fanhui" />
                <div className="signin" data-flex="dir:top main:center cross:center">
                    <div className="center">
                        <button className="btn btn-red" onClick={this.signout}>确认退出登录？</button>
                    </div>
                </div>
            </div>
        );
    }
}
Main.contextTypes = {
    router: PropTypes.object.isRequired
}


export default connect((state) => { return { User: state.User }; }, action('User'))(Main); //连接redux