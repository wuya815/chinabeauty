import React ,{Component} from "react";
import "./index.scss";
import {NavLink} from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Sidebar extends Component{
	constructor(){
		super();
		this.state={

		}
	}

	render(){
		return <div>
			<ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {
               this.props.isshow?
               <aside>
               	<ul onClick={()=>{
                         this.props.event();
                    }}>
               		<li>
               			<NavLink to="/home">主页</NavLink>
               		</li>
               		<li>
               			<NavLink to="/film">电影</NavLink>
               		</li>
               		<li>
               			<NavLink to="/card">Card</NavLink>
               		</li>
               	</ul>
               </aside>
               :null
          }
          </ReactCSSTransitionGroup>
		</div>
	}
}

export default Sidebar;