// const App = () => (
//     <div>
//         <h2>My Todo List</h2>
//         <GroceryList />
//     </div>
// );
const Bread = (props) => (
    <li>{props.item}</li>
)

const Milk = (props) => (
    <li>{props.item}</li>
)

const GroceryList = () => (
    <ul>
        <Bread item="bread" />
        <Milk item="milk" />
    </ul>
)




ReactDOM.render(<GroceryList />, document.getElementById("app"))
