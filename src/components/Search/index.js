import React ,{Component} from "react";
import "./index.scss";
import axios from "axios";
import { connect } from "react-redux";

class Search extends Component{
	constructor(){
		super();
		this.state={

		}
	}

	componentWillMount(){

	}

	render(){
		return <div className="searchneirong">


				<div className="shangsou">
					<div className="sousuo">
						<input type="text" name="" placeholder="请输入您要搜索的关键字" className="word" ref="keyword" />
						<button name="sou" onClick={this.getsearchlist.bind(this)}>搜索</button>
					</div>
					<div className="img">
						<img src="src/assets/search_icon1.png" />
					</div>
				</div>

				<div>
					<span className="zixun">资讯</span>
					<i></i>
				</div>

				{
					this.props.searchlist.map(item=>
						<div className="sounr" key={item.ID}>
							<img src={item.Pic} className="biaotu" />
							<div className="wenzi">
								<p className="title">{item.Title}</p>
							</div>
							<p className="source">
								<img src="src/assets/news_original.png" />{item.Source}
								<span>{item.AddTime}</span>
							</p>
							
						</div>
					)
				}
		</div>
	}

	getsearchlist(){
		console.log(this.refs.keyword.value)
		var keyword = this.refs.keyword.value
		this.props.getsearchlist(keyword)
	}

}



export default connect(
		(state)=>{
			return{
				searchlist:state.search
			}
		},
		{
			getsearchlist:(keyword)=>{
				return(dispath)=>{
						axios.get("ASHX/News.ashx?Action=GetTopSearchNews&SearchKey="+keyword).then(res=>{
							console.log(res.data.Result)
						dispath({
							type:"searchlist",
							//payload:res.data.Result.length!=0?res.data.Result[0]:[]
							payload:res.data.Result
						})
					})
				}
			}
		}


	)(Search);