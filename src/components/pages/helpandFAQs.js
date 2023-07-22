import React from 'react'
import Header from '../../directives/header'
import Footer from '../../directives/footer'
import { Container, Row, Col, Accordion } from 'react-bootstrap'

function HelpandFAQs() {
    return (
        <>
            <Header />
            <div className='allPage-bg'>
                <div className='section-padding'>
                    <div className='AllPage-area'>
                        <Container>
                            <Row>
                                <Col lg={7}>
                                    <h2>HELP & FAQs</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s, when an unknown.</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>

            <section className='section-padding faqs-list'>
                <Container>
                    <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What Shipping Methods Are Available?</Accordion.Header>
                                    <Accordion.Body>
                                    Oneself endless holiest society philosophy dept valuation Contradicts gains nobless end lose preju dice battle hope the battle philosophy Gains endless capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>How Do I Track My Order?</Accordion.Header>
                                    <Accordion.Body>
                                    Swag slow-carb quinoa VHS typewriter pork belly brunch, paleo single-origin coffee Wes Anderson. Flexitarian Pitchfork forage, literally paleo fap pour-over. Wes Anderson Pinterest YOLO fanny pack meggings.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>How do I place an Order?</Accordion.Header>
                                    <Accordion.Body>
                                    Keytar cray slow-carb, Godard banh mi salvia pour-over. Slow-carb Odd Future seitan normcore. Master cleanse American Apparel gentrify flexitarian beard slow-carb next level. Raw denim polaroid paleo farm-to-table, put a bird on it lo-fi tattooed Wes Anderson Pinterest letterpress. Fingerstache McSweeney’s pour-over, letterpress Schlitz photo booth master cleanse bespoke hashtag chillwave gentrify.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Do You Ship Internationally?</Accordion.Header>
                                    <Accordion.Body>
                                    Oneself endless holiest society philosophy dept valuation Contradicts gains nobless end lose preju dice battle hope the battle philosophy Gains endless capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>How Long Will It Take To Get My Package?</Accordion.Header>
                                    <Accordion.Body>
                                        And sir dare view but over man. So at within mr to simple assure. Mr disposing continued it offending arranging in we. Extremity as if breakfast agreement. Off now mistress provided out horrible opinions.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="6">
                                    <Accordion.Header>Can I send gifts to my loved ones?</Accordion.Header>
                                    <Accordion.Body>
                                    gifts to your loved ones along with a personalized message.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="7">
                                    <Accordion.Header>What happens if my order is lost in transit?</Accordion.Header>
                                    <Accordion.Body>
                                    In the unlikely event that an order gets lost during transit, we wait for 15 days to track your lost order and if we are still unsuccessful, then we process your refund through the payment mode that you had opted for at the time of placing the order.
                                    </Accordion.Body>
                                </Accordion.Item>
                    </Accordion>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default HelpandFAQs