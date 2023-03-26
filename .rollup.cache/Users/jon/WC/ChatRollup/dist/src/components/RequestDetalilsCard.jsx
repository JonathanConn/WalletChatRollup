import { COSMOS_MAINNET_CHAINS } from '@/data/COSMOSData';
import { EIP155_CHAINS } from '@/data/EIP155Data';
import { SOLANA_CHAINS } from '@/data/SolanaData';
import { Col, Divider, Row, Text } from '@nextui-org/react';
import { Fragment } from 'react';
/**
 * Component
 */
export default function RequesDetailsCard(_a) {
    var chains = _a.chains, protocol = _a.protocol;
    return (<Fragment>
      <Row>
        <Col>
          <Text h5>Blockchain(s)</Text>
          <Text color="$gray400">
            {chains
            .map(function (chain) {
            var _a, _b, _c, _d, _e, _f;
            return (_f = (_d = (_b = (_a = EIP155_CHAINS[chain]) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : (_c = COSMOS_MAINNET_CHAINS[chain]) === null || _c === void 0 ? void 0 : _c.name) !== null && _d !== void 0 ? _d : (_e = SOLANA_CHAINS[chain]) === null || _e === void 0 ? void 0 : _e.name) !== null && _f !== void 0 ? _f : chain;
        })
            .join(', ')}
          </Text>
        </Col>
      </Row>

      <Divider y={2}/>

      <Row>
        <Col>
          <Text h5>Relay Protocol</Text>
          <Text color="$gray400">{protocol}</Text>
        </Col>
      </Row>
    </Fragment>);
}
//# sourceMappingURL=RequestDetalilsCard.jsx.map