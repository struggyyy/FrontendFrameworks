import React, { useReducer } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppReducer from '../data/AppReducer';

const FlexContainer = ({ element: Element, data }) => {
    const [items, dispatch] = useReducer(AppReducer, data);

    return (
        <Container>
            <Row>
                {items.map(item => (
                    <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
                        <Element {...item} dispatch={dispatch} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default FlexContainer;
