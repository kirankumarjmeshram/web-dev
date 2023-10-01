import { Container, Row, Col } from "react-bootstrap"
/**
 * 
 * @returns footer of the app at bottom
 */
const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
        <Container>
            <Row>
                <Col className="text-center py=3">
                    <p>
                        Product Management &copy; {currentYear}</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer