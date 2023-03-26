import { Container, Modal, Text } from '@nextui-org/react';
import { Fragment } from 'react';
/**
 * Component
 */
export default function RequestModalContainer(_a) {
    var children = _a.children, title = _a.title;
    return (<Fragment>
      <Modal.Header>
        <Text h3>{title}</Text>
      </Modal.Header>

      <Modal.Body>
        <Container css={{ padding: 0 }}>{children}</Container>
      </Modal.Body>
    </Fragment>);
}
//# sourceMappingURL=RequestModalContainer.jsx.map