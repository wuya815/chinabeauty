import React ,{Component} from "react";
import "./index.scss";
import Headbar from "../Common/Headbar";
import Navbar from "../Common/Navbar";
import Swipet from "../Common/Swipe";
import Footbar from "../Common/Footbar";


class App extends Component{
	constructor(){
		super();
		this.state={
			//show:false
		}
	}

	render(){
		return <div>
			<Headbar></Headbar>
			<Navbar></Navbar>
			
			<Footbar></Footbar>
		<section>
			{
				this.props.children
			}
		</section>
		</div>
	}
}

export default App;