import React ,{Component} from "react";
import "./index.scss";
import axios from "axios";
import Swipet from "../Common/Swipe";
import ReactSwipe from "react-swipe";
import {connect} from "react-redux";


class Home extends Component{
	constructor(){
		super();
		this.state={
		clicknum:1,
		totalpage:0,
		list:[],
		}
	}

	componentWillMount(){
		this.props.gethomelist(1)
		var totalpage=0;
		var list = []
		var that=this;
		function cc(i){
			axios.get(`ASHX/News.ashx?Action=GetNews&CategoryID=&PageIndex=${i}`).then(res=>{
				//console.log(res)
				if(res.data.Result.length!=0){
					//console.log(...res.data.Result)


					list.push(...res.data.Result)
					i += 1
					cc(i)
				}else{
					//console.log(list)
					that.setState({
						totalpage:i-1,
						list:list
					},function(){
						console.log(that.state.list)
					})

				}
			})
		}
		cc(1)
	}

	render(){
		return <div className="zhuye">
			<Swipet></Swipet>
            <div className="liebiao">
				<ul id="ulcss">
					<li className="neirong">
						{
							this.props.homelist.map(item=>
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
				<div className="niuback">
					<button className="up" onClick={this.pageup.bind(this,this.state.clicknum)}>上一页</button>
					<div className="page">
						<span>{this.state.clicknum}</span>/
						<span>{this.state.totalpage}</span>
					</div>
					<button className="down" onClick={this.pagedown.bind(this,this.state.clicknum)}>下一页</button>
				</div>
			</div>
		</div>
	}

	pageup(clicknum){
		console.log(clicknum)
		var nowpage=clicknum-1;
		this.props.gethomelist(nowpage);
		if(clicknum>1&&clicknum<12){
		this.setState({
			clicknum:nowpage
		})
		}
	}
	pagedown(clicknum){
		var nowpage=clicknum+1;
		this.props.gethomelist(nowpage);
		if(clicknum>0&&clicknum<10){
		this.setState({
			clicknum:nowpage
		})
		}else if (clicknum>=10) {
			nowpage==10
		}
	}
}

export default connect(
		(state)=>{
			return{
				homelist:state.home,
			}
		},
		{

			gethomelist:(page)=>{
				return(dispath)=>{
					axios.get(`ASHX/News.ashx?Action=GetNews&CategoryID=&PageIndex=${page}`).then(res=>{
							dispath({
								type:"homelist",
								payload:res.data.Result
							})
						})
				}
			}
		}
)(Home);