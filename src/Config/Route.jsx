import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory();

import IndexList from '../Component/Home/Index'; //首页组件
import getComponent from '../Component/common/getComponent';
const routes = [
	{ path: '/',
		exact: true,
		component: IndexList
	},
	{ path: '/topic/create',
		exact: false,
		component: (props) => getComponent(props, () => import('../Component/Topic/Create'))
	},
	{ path: '/topic/:id',
		exact: false,
		component: (props) => getComponent(props, () => import('../Component/Topic/Topic'))
	},
	{ path: '/my/messages',
		exact: false,
		component: (props) => getComponent(props, () => import('../Component/Message/List'))
	},
	{ path: '/user/:loginname',
		exact: false,
		component: (props) => getComponent(props, () => import('../Component/Ucenter/User'))
	},
	{ path: '/signin',
		exact: false,
		component: (props) => getComponent(props, () => import('../Component/Public/Signin'))
	},
	{ path: '/signout',
		exact: false,
		component: (props) => getComponent(props, () => import('../Component/Public/Signout'))
	}
];
/**
 * (路由根目录组件，显示当前符合条件的组件)
 * 
 * @class Roots
 * @extends {Component}
 */
class Roots extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}
// var history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
const supportsHistory = 'pushState' in window.history;
let Router = HashRouter;
const RouteConfig = (
    <Router  history={history}>
	    <Switch>
		    {routes.map((route, index) => (
			    <Route
				    key={index}
				    path={route.path}
				    exact={route.exact}
				    component={route.component}
			    />
		    ))}
		    <Redirect from='' to="/" />
	    </Switch>
    </Router>
);

export default RouteConfig;