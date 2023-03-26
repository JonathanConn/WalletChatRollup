import { __assign, __spreadArray } from "tslib";
import ChainCard from '@/components/ChainCard';
import { COSMOS_MAINNET_CHAINS } from '@/data/COSMOSData';
import { EIP155_MAINNET_CHAINS, EIP155_TEST_CHAINS } from '@/data/EIP155Data';
import { SOLANA_MAINNET_CHAINS, SOLANA_TEST_CHAINS } from '@/data/SolanaData';
import { formatChainName } from '@/utils/HelperUtil';
import { Col, Row, Text } from '@nextui-org/react';
import { Fragment } from 'react';
/**
 * Utilities
 */
var CHAIN_METADATA = __assign(__assign(__assign(__assign(__assign({}, COSMOS_MAINNET_CHAINS), SOLANA_MAINNET_CHAINS), EIP155_MAINNET_CHAINS), EIP155_TEST_CHAINS), SOLANA_TEST_CHAINS);
/**
 * Component
 */
export default function SessionProposalChainCard(_a) {
    var requiredNamespace = _a.requiredNamespace;
    return (<Fragment>
      {requiredNamespace.chains.map(function (chainId) {
            var _a, _b;
            var extensionMethods = [];
            var extensionEvents = [];
            (_a = requiredNamespace.extension) === null || _a === void 0 ? void 0 : _a.map(function (_a) {
                var chains = _a.chains, methods = _a.methods, events = _a.events;
                if (chains.includes(chainId)) {
                    extensionMethods.push.apply(extensionMethods, methods);
                    extensionEvents.push.apply(extensionEvents, events);
                }
            });
            var allMethods = __spreadArray(__spreadArray([], requiredNamespace.methods, true), extensionMethods, true);
            var allEvents = __spreadArray(__spreadArray([], requiredNamespace.events, true), extensionEvents, true);
            // @ts-expect-error
            var rgb = (_b = CHAIN_METADATA[chainId]) === null || _b === void 0 ? void 0 : _b.rgb;
            return (<ChainCard key={chainId} rgb={rgb !== null && rgb !== void 0 ? rgb : ''} flexDirection="col" alignItems="flex-start">
            <Text h5 css={{ marginBottom: '$5' }}>
              {formatChainName(chainId)}
            </Text>
            <Row>
              <Col>
                <Text h6>Methods</Text>
                <Text color="$gray300">{allMethods.length ? allMethods.join(', ') : '-'}</Text>
              </Col>
            </Row>
            <Row css={{ marginTop: '$5' }}>
              <Col>
                <Text h6>Events</Text>
                <Text color="$gray300">{allEvents.length ? allEvents.join(', ') : '-'}</Text>
              </Col>
            </Row>
          </ChainCard>);
        })}
    </Fragment>);
}
//# sourceMappingURL=SessionProposalChainCard.jsx.map