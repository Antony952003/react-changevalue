import React from 'react';
class formula extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            a:10,
            b:2,
            c:3
        };
    }
    changeA = ()=>{
        this.setState({a:5});
    }
    changeB = ()=>{
        this.setState({b:8});
    }
    changeC = ()=>{
        this.setState({c:9});
    }
    display = ()=>{
        this.setState({a:4,b:12,c:13});
    }
    render(){
    return(<>
    <h2>A : {this.state.a}</h2>
    <h2>B : {this.state.b}</h2>
    <h2>C : {this.state.c}</h2>
    <button onClick={this.changeA}>Change A</button>
    <button onClick={this.changeB}>Change B</button>
    <button onClick={this.changeC}>Change C</button>
    <button onClick={this.display}>Display</button>
    <h1>The Ans is {this.state.a*this.state.b*this.state.c}</h1>
    </>
    );
}
}
export default formula;