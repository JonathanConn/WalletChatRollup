import { Col, Row, Text } from '@nextui-org/react';
import { CodeBlock, codepen } from 'react-code-blocks';
/**
 * Component
 */
export default function RequestDataCard(_a) {
    var data = _a.data;
    return (<Row>
      <Col>
        <Text h5>Data</Text>
        <CodeBlock showLineNumbers={false} text={JSON.stringify(data, null, 2)} theme={codepen} language="json"/>
      </Col>
    </Row>);
}
//# sourceMappingURL=RequestDataCard.jsx.map