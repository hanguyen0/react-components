
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
            fontWeight: this.state.done ? 'bold' : 'none'
        };
        return (
            <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.grocery}</li>
        )



    }
}

// const items = ['cake', 'broccoli', 'chololate'];
// const grocery = new GroceryListItem(items);

const GroceryList = (props) => {
    console.log(props)
    return (
        <ul>
            {props.items.map(item =>
                <GroceryListItem grocery={item} />
            )}
        </ul>

    )
}








ReactDOM.render(<GroceryList items={["bread", "milk"]} />, document.getElementById("app"));
