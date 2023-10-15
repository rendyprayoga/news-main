import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import card1Image from "../assets/card1.jpg";
import card2Image from "../assets/card2.jpg";
import card3Image from "../assets/card3.jpg";

const cardData = [
  {
    title: "Card Title 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: card1Image,
  },
  {
    title: "Card Title 2",
    text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    image: card2Image,
  },
  {
    title: "Card Title 3",
    text: "has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    image: card3Image,
  },
];

export default function About() {
  return (
    <div className="d-flex justify-content-between mt-5">
      {cardData.map((card, index) => (
        <Card key={index} style={{ width: "24rem", margin: "0 5px" }}>
          <img className="w-100" src={card.image} alt={`slide-${index}`} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
