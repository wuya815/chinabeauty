import React ,{Component} from "react";
import "./index.scss";
import axios from "axios";
import Swipet from "../Common/Swipe";
import {NavLink} from "react-router-dom";
import { connect } from "react-redux";

class Cs extends Component{
	constructor(){
		super();
		this.state={

		}
	}

	componentWillMount(){
		this.props.getcontentlist()
	}

	render(){
		return <div className="cs">
			<Swipet></Swipet>
			<ul id="ulCscss">
					<li className="csneirong">
						{
							this.props.cslist.map(item=>
								<div key={item.ID}>
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
				cslist:state.cs
			}
		},
		{
			getcontentlist:()=>{
				return(dispath)=>{
					axios.get(`ASHX/News.ashx?Action=GetNews&CategoryID=2&IsHots=false&PageIndex=1`).then(res=>{
						dispath({
							type:"cslist",
							payload:res.data.Result
						})
					})
				}
			}
		}
)(Cs);