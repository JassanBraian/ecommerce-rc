import { useNavigate } from "react-router";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container, NavDropdown } from "react-bootstrap";
import "../../css/header.css";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import NavbarSearch from "./NavbarSearch";
import { useContext } from "react";
import AdminProductsContext from "../../context/admin/products/AdminProductsContext";

const Header = () => {
  const { filterByCategory } =
    useContext(AdminProductsContext);

  const navigate = useNavigate();

  const goToPage = (page) => {
    navigate(page);
  };

  return (
    <>
      <Navbar className="header">
        <Container>
          <Navbar.Brand>
            <Nav.Link onClick={() => goToPage("/")}>
              <FontAwesomeIcon icon={faGlobe} />
            </Nav.Link>
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link onClick={() => goToPage("/favourites")}>
              Favorites
            </Nav.Link>

            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item
                onClick={() => {
                  filterByCategory("Zapatillas");
                  goToPage("/category-page");
                }}
              >
                Zapatillas
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  filterByCategory("Ojotas");
                  goToPage("/category-page");
                }}
              >
                Ojotas
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  filterByCategory("Botines");
                  goToPage("/category-page");
                }}
              >
                Botines
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  filterByCategory("Remeras");
                  goToPage("/category-page");
                }}
              >
                Remeras
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  filterByCategory("Camisetas");
                  goToPage("/category-page");
                }}
              >
                Camisetas
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  filterByCategory("Shorts");
                  goToPage("/category-page");
                }}
              >
                Shorts
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  filterByCategory("Pantalones");
                  goToPage("/category-page");
                }}
              >
                Pantalones
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  filterByCategory("Buzos y Camperas");
                  goToPage("/category-page");
                }}
              >
                Buzos y Camperas
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <NavbarSearch />

          <Button variant="dark" onClick={() => goToPage("/")} className="ms-5">
            LogIn
          </Button>

          <Button variant="dark" onClick={() => goToPage("/")} className="ms-1">
            Register
          </Button>

          <NavDropdown
            title={<FontAwesomeIcon icon={faCartPlus} className="fa-lg" />}
            id="basic-nav-dropdown"
            className="mx-5"
          >
            <NavDropdown.Item href="#">Product 1</NavDropdown.Item>
            <NavDropdown.Item href="#">Product 2</NavDropdown.Item>
            <NavDropdown.Item href="#">Product 3</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
