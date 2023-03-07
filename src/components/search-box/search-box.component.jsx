import "./search-box.styles.css";

// component using functional components
const SearchBox = (props) => {
  return (
    <input
      className={props.className}
      type="search"
      placeholder={props.placeholder}
      onChange={props.onChangeHandler}
    />
  );
};

// same component using class components
// class SearchBox extends Component {
//   render() {
//     return (
//       <input
//         className={this.props.className}
//         type="search"
//         placeholder={this.props.placeholder}
//         onChange={this.props.onChangeHandler}
//       />
//     );
//   }
// }

export default SearchBox;
