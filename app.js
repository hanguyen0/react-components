
class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false
        };
    }

    onListItemHover() {
        this.setState({
            done: !this.state.done
        });
    };

    render() {
        var style = {
            textDecoration: this.state.done ? 'bold' : 'none'
        };
        return (
            <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.items}</li>
        )
    }
}
const items = ['cake', 'broccoli', 'chololate'];
const GroceryList = (props) => {

    return (
        <ul>
            {props.items.map(item => {
                <GroceryListItem items={item} />
            })}

        </ul>

    )
}








ReactDOM.render(<GroceryList />, document.getElementById("app"));
