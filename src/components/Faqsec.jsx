import { Container } from "react-bootstrap"
import { Accordion } from "react-bootstrap"
import monkeyimg from "../assets/images/footer-logo.png"
import twitter from "../assets/images/ant-design_twitter-circle-filled.png"
import ship from "../assets/images/simple-icons_opensea.png"
import diamond from "../assets/images/diamond-svg.png"
import discord from "../assets/images/gaming-svg.png"
import mnamed from "../assets/images/m-img-svg.png"
import telegram from "../assets/images/cib_telegram.png"
export const Faqsec = () => {
    return (
        <div className='bg-faq py-4 pb-3 position-relative overflow-hidden' id='faq'>
            <Container className=" position-relative z-1">
                <h3 className="fs-xxl fw-900 text-white lh-136 text-center pb-4 pt-5">FAQs</h3>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0" className="mt-2">
                        <Accordion.Header className="acc-crd fs-sm3 fw-700 ff-mon text-white">Arcu faucibus diam feugiat magna etiam.</Accordion.Header>
                        <Accordion.Body className="fs-sm fw-normal text-white ff-mon mx-830">
                            Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className="mt-2">
                        <Accordion.Header className="acc-crd fs-sm3 fw-700 ff-mon text-white">Fermentum tortor aenean.</Accordion.Header>
                        <Accordion.Body className="fs-sm fw-normal text-white ff-mon mx-830">
                            Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className="mt-2">
                        <Accordion.Header className="acc-crd fs-sm3 fw-700 ff-mon text-white">Dictum est amet sollicitudin.</Accordion.Header>
                        <Accordion.Body className="fs-sm fw-normal text-white ff-mon mx-830">
                            Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className="mt-2">
                        <Accordion.Header className="acc-crd fs-sm3 fw-700 ff-mon text-white">Sed vulputate mi faucibus.</Accordion.Header>
                        <Accordion.Body className="fs-sm fw-normal text-white ff-mon mx-830">
                            Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className="mt-2">
                        <Accordion.Header className="acc-crd fs-sm3 fw-700 ff-mon text-white">Nunc amet cursus morbi donec.</Accordion.Header>
                        <Accordion.Body className="fs-sm fw-normal text-white ff-mon mx-830">
                            Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5" className="mt-2">
                        <Accordion.Header className="acc-crd fs-sm3 fw-700 ff-mon text-white">Commodo placerat ultricies.</Accordion.Header>
                        <Accordion.Body className="fs-sm fw-normal text-white ff-mon mx-830">
                            Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </Container>
            <div className="text-center position-relative z-1">
                <img src={monkeyimg} alt="monkey" className="mt-5 pt-5 pb-4 monkey-img" />
            </div>
            <div className="d-flex gap-24 align-items-center justify-content-center position-relative z-1">
                <a href="https://twitter.com/i/flow/login" className="links-icon"><img src={twitter} alt="twitt" /></a>
                <a href="//https/" className="links-icon"><img src={ship} alt="twitt" /></a>
                <a href="//https/" className="links-icon"><img src={diamond} alt="twitt" /></a>
                <a href="https://support.discord.com/hc/en-us/community/posts/360056220432-Login" className="links-icon"><img src={discord} alt="twitt" /></a>
                <a href="https/" className="links-icon"><img src={mnamed} alt="twitt" /></a >
                <a href="https://telegram.org/" className="links-icon"><img src={telegram} alt="twitt" /></a >
            </div>
            <hr className="foot-line" />
            <p className="fw-normal ff-mon fs-sm text-white text-center mb-1">© DomPKong 2022</p>
            <span className="footer-ellipse"></span>
            <span className="footer-ellipse2"></span>
        </div>
    )
}
export default Faqsec