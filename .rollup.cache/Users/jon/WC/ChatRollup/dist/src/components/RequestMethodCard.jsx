import { Col, Row, Text } from '@nextui-org/react';
/**
 * Component
 */
export default function RequestMethodCard(_a) {
    var methods = _a.methods;
    return (<Row>
      <Col>
        <Text h5>Methods</Text>
        <Text color="$gray400">{methods.map(function (method) { return method; }).join(', ')}</Text>
      </Col>
    </Row>);
}
//# sourceMappingURL=RequestMethodCard.jsx.map