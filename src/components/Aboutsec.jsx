import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import aboutimg from "../assets/images/boats-wathes-img.png";

export const Aboutsec = () => {
    return (
        <div className="bg-clr mt-5">
            <Container className=" my_container pt-2 pt-md-5">
                <Row className=" align-items-center pt-1 pt-md-5">
                    <Col md={6} className="col-12 pt-1 pt-md-5">
                        <p className="fs-xxl fw-normal ff-azo mb-0 lh-108 white-F">About </p>
                        <p className="fs-sm fw-normal white-F lh-160 mb-0 mw_450">
                            Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra
                            amet et. Erat nam molestie. Vitae mollis lacus senectus mattis
                            nisl. Porta , adipiscing sed mus diam amet, ac sed tellus.{" "}
                        </p>
                    </Col>
                    <Col md={6} className="col-12 mt-5 mt-md-0 position-relative z-1">
                        <img className="z-2 w-100" src={aboutimg} alt="#" />
                        <span className="about-shadow position-absolute z-n1"></span>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Aboutsec