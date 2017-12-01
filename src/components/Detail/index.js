import React ,{Component} from "react";
import "./index.scss";


class Card extends Component{
	constructor(){
		super();
		this.state={

		}
	}

	render(){
		return <div className="ka">
			<div class="haha">
			<h3>{{news[1].Title}}</h3>
			<div class="zuozhe"><i>{{news[1].Author}}</i><span>{{news[1].AddTime}}</span></div>
			<div class="guanggao">
				<img src="src/assets/guanggao01.jpg" />
			</div>
			<div class="text">{{news[1].SEODescription}}</div>
			<!-- <div class="keyword">{{news[1].KeyWords}}</div> -->
			<div class="guanjianzi">
				<ul>
					<li v-for="Result in arrkey" class="gjz">
						<span v-for="data in Result">{{data}}</span>
					</li>
				</ul>
			</div>
			<div class="yuedu">
				<div class="xiangguan">
					<span>相关阅读</span>
				</div>
			</div>
			<div>
				<ul>
					<li v-for="data in news" class="ydwidth">
						<div class="ydlist">
							<div class="title">{{data.Title}}</div>
							<div class="source"><img src="src/assets/news_original.png">{{data.Source}}</div>
						</div>
						<img :src="data.Pic" />
					</li>
				</ul>
			</div>
		</div>
		</div>
	}
}

export default Card;