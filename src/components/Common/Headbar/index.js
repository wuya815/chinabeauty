import React ,{Component} from "react";
import "./index.scss";
import {NavLink} from "react-router-dom";
import "@/assets/iconfont/iconfont.css";
import {connect} from "react-redux";


class Headbar extends Component{
     constructor(){
          super();
          this.state={

          }
     }

     render(){
          return <div className="header">
               <ul>
                    <li>
                         <NavLink to="/tv"><img src="src/assets/vidieo_index.png" className="vidieo"/></NavLink>
                    </li>
                         <NavLink to="/home" className="title">中国美妆网</NavLink>
                    <li>
                         <NavLink to="/search"><img src="src/assets/search_index.png" className="search"/></NavLink>
                    </li>
               </ul>
          </div>
     }

     handleClick(){
          this.props.event();
     }
}

export default connect()(Headbar);