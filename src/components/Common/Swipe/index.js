import React ,{Component} from "react";
import "./index.scss";
import axios from "axios";
import ReactSwipe from "react-swipe";
import {connect} from "react-redux";

class Swipet extends Component{
	constructor(){
		super();
		this.state={

		}
	}

	render(){
		return <div className="swipet">{
      console.log(this.props)
    }
               <ReactSwipe className="carousel" swipeOptions={{continuous: true,auto:2000}} key={this.props.swipetlist.length}>
                {

                    this.props.swipetlist.map(item=> <img src={item.imageUrl} key={item.id}/>)

                }
            </ReactSwipe>
            </div>
          }
          componentWillMount(){
            this.props.getswipet();
          }
	}


export default connect(
          (state)=>{
               return{
                    swipetlist:state.swipet
               }
          },
          {
               getswipet:()=>{
                    return(dispath)=>{
                      axios.get("/v4/api/billboard/home").then(res=>{
                                   dispath({
                                        type:"swipetlist",
                                        payload:res.data.data.billboards
                                   })
                              })
                    }
               }
          }
     )(Swipet);