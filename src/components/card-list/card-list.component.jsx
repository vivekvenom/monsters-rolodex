import Card from "../card/card.component";
import "./card-list.styles.css";

// component using functional components
const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card monster={monster} />
      ))}
    </div>
  );
};

// same component using class components
// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => (
//           <Card monster={monster} />
//         ))}
//       </div>
//     );
//   }
// }

export default CardList;
