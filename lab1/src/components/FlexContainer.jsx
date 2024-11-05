import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppContext from '../data/AppContext';

const FlexContainer = ({ element: Element }) => {
    const { items } = useContext(AppContext);

    return (
        <Container>
            <Row>
                {items.map(item => (
                    <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
                        <Element {...item} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default FlexContainer;
