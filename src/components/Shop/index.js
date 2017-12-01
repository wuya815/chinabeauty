import React ,{Component} from "react";
import "./index.scss";
import axios from "axios";
import Swipet from "../Common/Swipe";
import {NavLink} from "react-router-dom";
import { connect } from "react-redux";

class Shop extends Component{
	constructor(){
		super();
		this.state={

		}
	}

	componentWillMount(){
		this.props.getshoplist()
	}

	render(){
		return <div className="shop">
		<Swipet></Swipet>
			<ul id="ulShopcss">
					<li className="shopneirong">
						{
							this.props.shoplist.map(item=>
								<div key={item.ID} className="shopheight">
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
				shoplist:state.shop
			}
		},
		{
			getshoplist:()=>{
				return(dispath)=>{
					axios.get(`ASHX/News.ashx?Action=GetNews&CategoryID=3&IsHots=false&PageIndex=1`).then(res=>{
						dispath({
							type:"shoplist",
							payload:res.data.Result
						})
					})
				}
			}
		}
)(Shop);