import { Outlet } from "react-router-dom";
import Header from "./header";
import Navigation from "./navbar";
import Footer from "./footer";
import { Container, Row, Col } from "react-bootstrap";
export default function Layout() {
  return (
    <div id="layout Wrapper">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <Header />
          </Col>
        </Row>

        <Row>
          <Col>
            <Navigation />
          </Col>
        </Row>

        <Row>
          <Col>
            <Outlet />
          </Col>
        </Row>

        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
