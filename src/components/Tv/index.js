import React ,{Component} from "react";
import "./index.scss";
import axios from "axios";
import {NavLink} from "react-router-dom";
import { connect } from "react-redux";

class Tv extends Component{
	constructor(){
		super();
		this.state={

		}
	}

	componentWillMount(){
		this.props.gettvonelist(),
		this.props.gettvtwolist()
	}

	render(){
		return <div className="tv">
			<ul id="ulTvcss">
					<li className="tvneirong">
						{
							this.props.tvonelist.map(item=>
								<div key={item.ID} className="shang">
									<img src={item.Pic}/>
									<p>{item.TVTitle}</p>
									<div className="wguan">{item.Hits}围观</div>
								</div>
							)
						}
						{
							this.props.tvtwolist.map(item=>
								<div key={item.ID} className="tvlist">
									<ul>
										<li>
										<img src={item.Pic} />
										<p className="title">{item.TVTitle}</p>
										<div className="weiguan">{item.Hits}围观<span>{item.AddTime}</span>
										</div>
										</li>
									</ul>
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
				tvonelist:state.tvo,
				tvtwolist:state.tvw
			}
		},
		{
			gettvonelist:()=>{
				return(dispath)=>{
					axios.get(`ASHX/TV.ashx?Action=GetTopTV`).then(res=>{
						dispath({
							type:"tvonelist",
							payload:res.data.Result
						})
					})
				}
			},
			gettvtwolist:()=>{
				return(dispath)=>{
					axios.get(`ASHX/TV.ashx?Action=GetTV&PageIndex=1`).then(res=>{
						dispath({
							type:"tvtwolist",
							payload:res.data.Result
						})
					})
				}
			}
		}
)(Tv);