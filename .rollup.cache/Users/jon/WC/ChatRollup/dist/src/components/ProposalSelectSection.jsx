import AccountSelectCard from '@/components/AccountSelectCard';
import { Col, Row, Text } from '@nextui-org/react';
/**
 * Component
 */
export default function ProposalSelectSection(_a) {
    var addresses = _a.addresses, selectedAddresses = _a.selectedAddresses, chain = _a.chain, onSelect = _a.onSelect;
    return (<Row>
      <Col>
        <Text h4 css={{ marginTop: '$5' }}>{"Choose ".concat(chain, " accounts")}</Text>
        {addresses.map(function (address, index) {
            var _a;
            return (<AccountSelectCard key={address} address={address} index={index} onSelect={function () { return onSelect(chain, address); }} selected={(_a = selectedAddresses === null || selectedAddresses === void 0 ? void 0 : selectedAddresses.includes(address)) !== null && _a !== void 0 ? _a : false}/>);
        })}
      </Col>
    </Row>);
}
//# sourceMappingURL=ProposalSelectSection.jsx.map