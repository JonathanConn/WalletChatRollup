import { Avatar, Col, Link, Row, Text } from '@nextui-org/react';
/**
 * Components
 */
export default function ProjectInfoCard(_a) {
    var metadata = _a.metadata;
    var icons = metadata.icons, name = metadata.name, url = metadata.url;
    return (<Row align="center">
      <Col span={3}>
        <Avatar src={icons[0]}/>
      </Col>
      <Col span={14}>
        <Text h5>{name}</Text>
        <Link href={url}>{url}</Link>
      </Col>
    </Row>);
}
//# sourceMappingURL=ProjectInfoCard.jsx.map