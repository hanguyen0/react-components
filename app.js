
class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { done: false };
    }

    onListItemHover() {
        this.setState({
            done: !this.state.done
        });
    };

    render() {
        var style = {
            textDecoration: this.state.done ? 'line-through' : 'none'
        };
        console.log(this.props.items)
        for(let item of this.props.items) {
            return <li style={style} onClick={this.onListItemHover.bind(this)}>{item}</li>
        }
            
        
    }
}

// const items = ['cake', 'broccoli', 'chololate'];
// const grocery = new GroceryListItem(items);

const GroceryList = (props) => {
    
    return (
        <ul>
            <GroceryListItem items={["bread", "milk"]} />
        </ul>

    )
}








ReactDOM.render(<GroceryList />, document.getElementById("app"));
