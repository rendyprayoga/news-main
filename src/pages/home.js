import { useEffect, useState } from "react";
import axios from "axios";
import { Table, Carousel } from "react-bootstrap";
import firstImage from "../assets/firstImage.jpg";
import secondImage from "../assets/secondImage.jpg";
import thirdtImage from "../assets/thirdImage.jpg";

export default function Home() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=tesla&from=2023-09-15&sortBy=publishedAt&apiKey=3e424f2025b44a518169971f8437ff6d`
        );
        setData(response.data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  console.log(Data);
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            width="420px"
            height="740px"
            src={firstImage}
            alt="fisrtslide"
          />
          <Carousel.Caption
            style={{ color: "#008080", fontSize: "24px", fontWeight: "bold" }}
          >
            <h2>Coronavirus</h2>
            <p>coronavirus is increasing, be alert</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            width="420px"
            height="740px"
            src={secondImage}
            alt="fisrtslide"
          />
          <Carousel.Caption
            style={{ color: "#2E8B57", fontSize: "24px", fontWeight: "bold" }}
          >
            <h2>Reporter</h2>
            <p>the reporter was impressed with the informant.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            width="420px"
            height="740px"
            src={thirdtImage}
            alt="fisrtslide"
          />
          <Carousel.Caption
            style={{ color: "#008080", fontSize: "24px", fontWeight: "bold" }}
          >
            <h2>Stock Trader</h2>
            <p>Stock traders are confused because the market is going down</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>title</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          {console.log(Data)}
          {Data.map((news, index) => (
            <tr key={index}>
              <td>{news.title}</td>

              <td>{news.description}</td>
              <td>
                <img width="50px" height="50px" alt="" src={news.urlToImage} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      ini outlet home
    </>
  );
}
