import { __awaiter, __generator } from "tslib";
import PageHeader from '@/components/PageHeader';
import ProjectInfoCard from '@/components/ProjectInfoCard';
import SessionChainCard from '@/components/SessionChainCard';
import { signClient } from '@/utils/WalletConnectUtil';
import { Button, Divider, Loading, Row, Text } from '@nextui-org/react';
import { getSdkError } from '@walletconnect/utils';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
/**
 * Component
 */
export default function SessionPage() {
    var _a = useState(''), topic = _a[0], setTopic = _a[1];
    var _b = useState(new Date()), updated = _b[0], setUpdated = _b[1];
    var _c = useRouter(), query = _c.query, replace = _c.replace;
    var _d = useState(false), loading = _d[0], setLoading = _d[1];
    useEffect(function () {
        if (query === null || query === void 0 ? void 0 : query.topic) {
            setTopic(query.topic);
        }
    }, [query]);
    var session = signClient.session.values.find(function (s) { return s.topic === topic; });
    if (!session) {
        return null;
    }
    // Get necessary data from session
    var expiryDate = new Date(session.expiry * 1000);
    var namespaces = session.namespaces;
    // Handle deletion of a session
    function onDeleteSession() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setLoading(true);
                        return [4 /*yield*/, signClient.disconnect({ topic: topic, reason: getSdkError('USER_DISCONNECTED') })];
                    case 1:
                        _a.sent();
                        replace('/sessions');
                        setLoading(false);
                        return [2 /*return*/];
                }
            });
        });
    }
    function onSessionPing() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setLoading(true);
                        return [4 /*yield*/, signClient.ping({ topic: topic })];
                    case 1:
                        _a.sent();
                        setLoading(false);
                        return [2 /*return*/];
                }
            });
        });
    }
    function onSessionEmit() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setLoading(true);
                        console.log('baleg');
                        return [4 /*yield*/, signClient.emit({
                                topic: topic,
                                event: { name: 'chainChanged', data: 'Hello World' },
                                chainId: 'eip155:1'
                            })];
                    case 1:
                        _a.sent();
                        setLoading(false);
                        return [2 /*return*/];
                }
            });
        });
    }
    var newNs = {
        eip155: {
            accounts: [
                'eip155:1:0x70012948c348CBF00806A3C79E3c5DAdFaAa347B',
                'eip155:137:0x70012948c348CBF00806A3C79E3c5DAdFaAa347B'
            ],
            methods: ['personal_sign', 'eth_signTypedData', 'eth_sendTransaction'],
            events: []
        }
    };
    function onSessionUpdate() {
        return __awaiter(this, void 0, void 0, function () {
            var acknowledged;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setLoading(true);
                        return [4 /*yield*/, signClient.update({ topic: topic, namespaces: newNs })];
                    case 1:
                        acknowledged = (_a.sent()).acknowledged;
                        return [4 /*yield*/, acknowledged()];
                    case 2:
                        _a.sent();
                        setUpdated(new Date());
                        setLoading(false);
                        return [2 /*return*/];
                }
            });
        });
    }
    // function renderAccountSelection(chain: string) {
    //   if (isEIP155Chain(chain)) {
    //     return (
    //       <ProposalSelectSection
    //         addresses={eip155Addresses}
    //         selectedAddresses={selectedAccounts[chain]}
    //         onSelect={onSelectAccount}
    //         chain={chain}
    //       />
    //     )
    //   } else if (isCosmosChain(chain)) {
    //     return (
    //       <ProposalSelectSection
    //         addresses={cosmosAddresses}
    //         selectedAddresses={selectedAccounts[chain]}
    //         onSelect={onSelectAccount}
    //         chain={chain}
    //       />
    //     )
    //   } else if (isSolanaChain(chain)) {
    //     return (
    //       <ProposalSelectSection
    //         addresses={solanaAddresses}
    //         selectedAddresses={selectedAccounts[chain]}
    //         onSelect={onSelectAccount}
    //         chain={chain}
    //       />
    //     )
    //   }
    // }
    return (<Fragment>
      <PageHeader title="Session Details"/>

      <ProjectInfoCard metadata={session.peer.metadata}/>

      <Divider y={2}/>

      {Object.keys(namespaces).map(function (chain) {
            return (<Fragment key={chain}>
            <Text h4 css={{ marginBottom: '$5' }}>{"Review ".concat(chain, " permissions")}</Text>
            <SessionChainCard namespace={namespaces[chain]}/>
            {/* {renderAccountSelection(chain)} */}
            <Divider y={2}/>
          </Fragment>);
        })}

      <Row justify="space-between">
        <Text h5>Expiry</Text>
        <Text css={{ color: '$gray400' }}>{expiryDate.toDateString()}</Text>
      </Row>

      <Row justify="space-between">
        <Text h5>Last Updated</Text>
        <Text css={{ color: '$gray400' }}>{updated.toDateString()}</Text>
      </Row>

      <Row css={{ marginTop: '$10' }}>
        <Button flat css={{ width: '100%' }} color="error" onClick={onDeleteSession}>
          {loading ? <Loading size="sm" color="error"/> : 'Delete'}
        </Button>
      </Row>

      <Row css={{ marginTop: '$10' }}>
        <Button flat css={{ width: '100%' }} color="primary" onClick={onSessionPing}>
          {loading ? <Loading size="sm" color="primary"/> : 'Ping'}
        </Button>
      </Row>

      <Row css={{ marginTop: '$10' }}>
        <Button flat css={{ width: '100%' }} color="secondary" onClick={onSessionEmit}>
          {loading ? <Loading size="sm" color="secondary"/> : 'Emit'}
        </Button>
      </Row>

      <Row css={{ marginTop: '$10' }}>
        <Button flat css={{ width: '100%' }} color="warning" onClick={onSessionUpdate}>
          {loading ? <Loading size="sm" color="warning"/> : 'Update'}
        </Button>
      </Row>
    </Fragment>);
}
//# sourceMappingURL=session.jsx.map