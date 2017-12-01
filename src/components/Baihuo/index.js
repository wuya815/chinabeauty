import React ,{Component} from "react";
import "./index.scss";
import axios from "axios";
import Swipet from "../Common/Swipe";
import {NavLink} from "react-router-dom";
import { connect } from "react-redux";

class Baihuo extends Component{
	constructor(){
		super();
		this.state={

		}
	}

	componentWillMount(){
		this.props.getbaihuolist()
	}

	render(){
		return <div className="baihuo">
			<Swipet></Swipet>
			<ul id="ulBaihuocss">
					<li className="baihuoneirong">
						{
							this.props.baihuolist.map(item=>
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
				baihuolist:state.baihuo
			}
		},
		{
			getbaihuolist:()=>{
				return(dispath)=>{
					axios.get(`ASHX/News.ashx?Action=GetNews&CategoryID=4&IsHots=false&PageIndex=1`).then(res=>{
						dispath({
							type:"baihuolist",
							payload:res.data.Result
						})
					})
				}
			}
		}
)(Baihuo);