import React ,{Component} from "react";
import "./index.scss";
import axios from "axios";
import Swipet from "../Common/Swipe";
import {NavLink} from "react-router-dom";
import { connect } from "react-redux";

class Weishang extends Component{
	constructor(){
		super();
		this.state={

		}
	}

	componentWillMount(){
		this.props.getweishanglist()
	}

	render(){
		return <div className="weishang">
		<Swipet></Swipet>
			<ul id="ulWeishangcss">
					<li className="weishangneirong">
						{
							this.props.weishanglist.map(item=>
								<div key={item.ID} className="weishangheight">
									<img src={item.Pic} className="biaotu"/>
									<div className="wenzi">
										<p className="title">{item.Title}</p>
									</div>
									<p className="source">
										<img src="src/assets/news_original.png"/>{item.Source}
										<span>{item.AddTime}</span>
									</p>
								</div>
							)
						}
					</li>
				</ul>
		</div>
	}
}

export default connect(
		(state)=>{
			return{
				weishanglist:state.weishang
			}
		},
		{
			getweishanglist:()=>{
				return(dispath)=>{
					axios.get(`ASHX/News.ashx?Action=GetNews&CategoryID=5&IsHots=false&PageIndex=1`).then(res=>{
						dispath({
							type:"weishanglist",
							payload:res.data.Result
						})
					})
				}
			}
		}
)(Weishang);