import { truncate } from '@/utils/HelperUtil';
import { Card, Checkbox, Row, Text } from '@nextui-org/react';
/**
 * Component
 */
export default function AccountSelectCard(_a) {
    var address = _a.address, selected = _a.selected, index = _a.index, onSelect = _a.onSelect;
    return (<Card onClick={onSelect} clickable key={address} css={{
            marginTop: '$5',
            backgroundColor: selected ? 'rgba(23, 200, 100, 0.2)' : '$accents2'
        }}>
      <Row justify="space-between" align="center">
        <Checkbox size="lg" color="success" checked={selected}/>

        <Text>{"".concat(truncate(address, 14), " - Account ").concat(index + 1)} </Text>
      </Row>
    </Card>);
}
//# sourceMappingURL=AccountSelectCard.jsx.map