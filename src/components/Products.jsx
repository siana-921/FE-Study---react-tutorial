import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProductCard } from "./ProductCard";
import product1 from "../assets/img/product1.jpg";
import product2 from "../assets/img/product2.jpg";
import product3 from "../assets/img/product3.jpg";
import product4 from "../assets/img/product4.jpg";
import product5 from "../assets/img/product5.jpg";
import product6 from "../assets/img/product6.jpg";
import product7 from "../assets/img/product7.jpg";
import product8 from "../assets/img/product8.jpg";

export const Products = () => {
  const products = [
    {
      title: "꽃놀이",
      imgUrl: product1,
    },
    {
      title: "첫사랑",
      imgUrl: product2,
    },
    {
      title: "책과단풍",
      imgUrl: product3,
    },
    {
      title: "베이킹",
      imgUrl: product4,
    },
    {
      title: "로또당첨!",
      imgUrl: product5,
    },
    {
      title: "간호사",
      imgUrl: product6,
    },
    {
      title: "개발자",
      imgUrl: product7,
    },
    {
      title: "깜냥이",
      imgUrl: product8,
    },
  ];

  return (
    <section className="products" id="products">
      <Container>
        <Row>
          <Col>
            <h2>Products</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <Tab.Container id="products-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {products.map((products, index) => {
                      return <ProductCard key={index} {...products} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">tab 2</Tab.Pane>
                <Tab.Pane eventKey="third">tab 3</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
