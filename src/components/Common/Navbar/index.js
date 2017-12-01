import React ,{Component} from "react";
import "./index.scss";
import {NavLink} from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "@/assets/iconfont/iconfont.css";
import {connect} from "react-redux";

class Navbar extends Component{
	constructor(){
		super();
		this.state={

		}
	}

	render(){
		return <nav>
               	<ul>
               		<li>
               			<NavLink to="/home">最新</NavLink>
               		</li>
               		<li>
               			<NavLink to="/cs">CS</NavLink>
               		</li>
               		<li>
               			<NavLink to="/shop">商超</NavLink>
               		</li>
					<li>
               			<NavLink to="/baihuo">百货</NavLink>
               		</li>
					<li>
               			<NavLink to="/weishang">微商</NavLink>
               		</li>
               	</ul>
               </nav>
          }
	}

export default connect()(Navbar);