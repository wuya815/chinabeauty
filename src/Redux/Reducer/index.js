const swipetreducer = (state=[],info)=>{
	let {type,payload} =info;
	switch(type){
		case "swipetlist":
			return [...payload];
		default :
			return state;
	}
}


const homereducer = (state=[],info)=>{
	let {type,payload} =info;
	switch(type){
		case "homelist":

			return [...payload];
		default :
			return state;
	}
}


const csreducer = (state = [], info) => {
	let { type, payload } = info;
	switch (type) {
		case "cslist":
			return [...payload];
		default:
			return state;
	}
}

const shopreducer = (state = [], info) => {
	let { type, payload } = info;
	switch (type) {
		case "shoplist":
			return [...payload];
		default:
			return state;
	}
}


const baihuoreducer = (state = [], info) => {
	let { type, payload } = info;
	switch (type) {
		case "baihuolist":
			return [...payload];
		default:
			return state;
	}
}


const tvonereducer = (state = [], info) => {
	let { type, payload } = info;
	switch (type) {
		case "tvonelist":
			return [...payload];
		default:
			return state;
	}
}


const tvtworeducer = (state = [], info) => {
	let { type, payload } = info;
	switch (type) {
		case "tvtwolist":
			return [...payload];
		default:
			return state;
	}
}


const searchreducer = (state = [], info) => {
	let { type, payload } = info;
	switch (type) {
		case "searchlist":
			return [...payload];
		default:
			return state;
	}
}

const weishangreducer = (state = [], info) => {
	let { type, payload } = info;
	switch (type) {
		case "weishanglist":
			return [...payload];
		default:
			return state;
	}
}

export  {swipetreducer,homereducer,csreducer,shopreducer,baihuoreducer,tvonereducer,tvtworeducer,searchreducer,weishangreducer};

// reducer 的设计必须是一个纯函数
// 
// 只要每次给定相同的输入值，就一定会得到相同的输出值: 例如传入1与2，就一定会得到3
// 不会改变原始输入参数，或是外部的环境，所以没有副作用
// 不依頼其他外部的状态，变量或常量

