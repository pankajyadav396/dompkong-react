import React, { useState } from "react";
import mintbottle from "../assets/images/mint-bottle.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export const Mintsec = () => {
    let [count, setCount] = useState(1);

    function incrementCount() {
        setCount((prevCount) => (prevCount < 9 ? prevCount + 1 : prevCount));
    }
    function decrementCount() {
        setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
    }

    return (
        <div className="bg-mint mt--2 position-relative mt-92 z-1">
            <div className="mint-right-ellipse"></div>
            <div className="mint-left-ellipse"></div>
            <div className="container-xl">
                <Row className="align-items-center justify-content-center">
                    <Col lg={6} className=" d-flex justify-content-center">
                        <img className="bottle_size" src={mintbottle} alt="#" />
                    </Col>
                    <Col lg={6} md={8} className="mt-5 mt-lg-0 mint-col mr--100">
                        <p className="fs-xxl fw-normal white-F ff-azo mb-0 lh-108">
                            Mint NFT
                        </p>
                        <div className="row pt-5">
                            <Col xs={6} className="">
                                <p className="fs-lg white-F mb-0 fw-900 ff-mon">9999 </p>
                                <p className="fs-sm white-F ff-mon fw-normal lh-160 mb-0  pt-3">
                                    of 10,000 minted
                                </p>
                                <p className="fs-lg white-F mb-0 fw-900 ff-mon pt-4">Max 9 </p>
                                <p className="fs-sm white-F ff-mon fw-normal lh-160 mb-0  pt-3">
                                    NFTs per transaction
                                </p>
                            </Col>
                            <Col xs={6}>
                                <p className="fs-lg white-F mb-0 fw-900 ff-mon">9999 </p>
                                <p className="fs-sm white-F ff-mon fw-normal lh-160 mb-0  pt-3">
                                    of 10,000 minted
                                </p>
                                <p className="fs-lg white-F mb-0 fw-900 ff-mon pt-4">Max 9 </p>
                                <p className="fs-sm white-F ff-mon fw-normal lh-160 mb-0  pt-3">
                                    NFTs per transaction
                                </p>
                            </Col>
                        </div>
                        <div className=" d-flex gap-14 pt-5">
                            <button
                                className="text-decoration-none fs-lg black-0 fw-900 plus-minus-btn lh-25 ff-2 border-0 "
                                onClick={decrementCount}
                            >
                                -
                            </button>
                            <div className="mb-0 show-number-btn fw-normal lh-25 ff-mon d-flex align-items-center">
                                <p className="mb-0 fs-lg ff-mon fw-900 white-F mx-auto">0{count}</p>
                            </div>
                            <button
                                className="text-decoration-none black-0 fs-lg fw-900 plus-minus-btn lh-25 ff_secandry border-0 "
                                onClick={incrementCount}
                            >
                                +
                            </button>
                        </div>
                        <button className="fs-md fw-normal black-0 mb-0 ff-azo mint-btn text-nowrap mt-4">
                            MINT NOW
                        </button>
                    </Col>
                </Row>
            </div>
        </div>
    );
}


const MIntnft = () => {

};

export default MIntnft;