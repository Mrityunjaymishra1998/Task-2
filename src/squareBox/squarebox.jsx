import React from 'react';
import './squarebox.styles.css'


class squareBox extends React.Component{
    
    constructor(){
        super();

        this.state={
            clicked1:false,clicked2:false,clicked3:false, clicked4:false, clicked5:false,
            count1:1,count2:1,count3:1,count4:1,count5:1
        }
    }
      
        clickHandle1=()=>{
            this.setState({count1:this.state.count1+1})
            if(this.state.count1%2===0)
            {
                this.setState({clicked1:false})
            }
            else{
                this.setState({clicked1:true})
            }
        }
        clickHandle2=()=>{
            this.setState({count2:this.state.count2+1})
            if(this.state.count2%2===0)
            {
                this.setState({clicked2:false})
            }
            else{
                this.setState({clicked2:true})
            }
        }
        clickHandle3=()=>{
            this.setState({count3:this.state.count3+1})
            if(this.state.count3%2===0)
            {
                this.setState({clicked3:false})
            }
            else{
                this.setState({clicked3:true})
            }
        }
        clickHandle4=()=>{
            this.setState({count4:this.state.count4+1})
            if(this.state.count4%2===0)
            {
                this.setState({clicked4:false})
            }
            else{
                this.setState({clicked4:true})
            }
        }
        clickHandle5=()=>{
            this.setState({count5:this.state.count5+1})
            if(this.state.count5%2===0)
            {
                this.setState({clicked5:false})
            }
            else{
                this.setState({clicked5:true})
            }
        }
       
       
    render(){
        const indexStyle1={
            zIndex:1
        }
        const indexStyle2={
            zIndex:1
        }
        const indexStyle3={
            zIndex:1
        }
        const indexStyle4={
            zIndex:1
        }
        const indexStyle5={
            zIndex:1
        }

        if(this.state.clicked1)
        {
              indexStyle1.zIndex=2;
        }
        if(this.state.clicked2)
        {
              indexStyle2.zIndex=2;
        }
        if(this.state.clicked3)
        {
              indexStyle3.zIndex=2;
        }
        if(this.state.clicked4)
        {
              indexStyle4.zIndex=2;
        }
        if(this.state.clicked5)
        {
              indexStyle5.zIndex=2;
        }
        return(
        <div className='main'>
            <div  className='box1' onClick={this.clickHandle1
            } style={indexStyle1}>
                1
            </div>
            <div className='box2' onClick={this.clickHandle2
            } style={indexStyle2}
                
          >
                2
            </div>
            <div className='box3'  onClick={this.clickHandle3
            } style={indexStyle3}
                
            >
                3
            </div>
            <div className='box4' onClick={this.clickHandle4
            } style={indexStyle4} >
                
         
                4
            </div>
            <div className='box5'  onClick={this.clickHandle5
            } style={indexStyle5}>
                5
            </div>

        </div>
        );
    }
}
export default squareBox;
