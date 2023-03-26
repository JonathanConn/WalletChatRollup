import { Card } from '@nextui-org/react';
export default function ChainCard(_a) {
    var rgb = _a.rgb, children = _a.children, flexDirection = _a.flexDirection, alignItems = _a.alignItems;
    return (<Card bordered borderWeight="light" css={{
            borderColor: "rgba(".concat(rgb, ", 0.4)"),
            boxShadow: "0 0 10px 0 rgba(".concat(rgb, ", 0.15)"),
            backgroundColor: "rgba(".concat(rgb, ", 0.25)"),
            marginBottom: '$6',
            minHeight: '70px'
        }}>
      <Card.Body css={{
            flexDirection: flexDirection,
            alignItems: alignItems,
            justifyContent: 'space-between',
            overflow: 'hidden'
        }}>
        {children}
      </Card.Body>
    </Card>);
}
//# sourceMappingURL=ChainCard.jsx.map