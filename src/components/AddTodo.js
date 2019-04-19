import React from 'react';

class AddTodo extends React.Component{
    state={
        title:''
    }

    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit = (e) => {
        //console.log(this.state.title);
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''});
        document.getElementById("in").value = "";
    }

    render(){
        return(
            <form style={{display:'flex'}} onSubmit={this.onSubmit}>
                <input 
                    id="in"
                    type="text"
                    name="title"
                    placeholder="Add Todo..."
                    style={{flex:'10', padding:'5px'}}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex:'1'}}
                />

            </form>
        )
    }
}
export default AddTodo;