import { Button, Col, Divider, Row, Text } from '@nextui-org/react';
import { Fragment } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import NextLink from 'next/link';
/**
 * Component
 */
export default function PageHeader(_a) {
    var title = _a.title, children = _a.children, ctaButton = _a.ctaButton, _b = _a.withBackButton, withBackButton = _b === void 0 ? false : _b, _c = _a.backButtonHref, backButtonHref = _c === void 0 ? '#' : _c;
    return (<Fragment>
      <Row css={{ marginBottom: '$5', width: '100%' }} justify="space-between" align="center">
        {withBackButton && (<Col css={{ width: 'auto' }}>
            <NextLink href={backButtonHref} passHref>
              <Button size="xl" auto light animated={false} icon={<FiChevronLeft />} css={{ paddingLeft: 0 }}/>
            </NextLink>
          </Col>)}
        <Col>
          <Text h3 weight="bold">
            {title}
          </Text>
        </Col>
        {children ? <Col css={{ flex: 1 }}>{children}</Col> : null}
        {ctaButton}
      </Row>

      <Divider css={{ marginBottom: '$10' }}/>
    </Fragment>);
}
//# sourceMappingURL=PageHeader.jsx.map