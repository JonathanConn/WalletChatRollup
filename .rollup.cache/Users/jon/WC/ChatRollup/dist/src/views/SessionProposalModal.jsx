import { __assign, __awaiter, __generator, __spreadArray } from "tslib";
import ProjectInfoCard from '@/components/ProjectInfoCard';
import ProposalSelectSection from '@/components/ProposalSelectSection';
import RequestModalContainer from '@/components/RequestModalContainer';
import SessionProposalChainCard from '@/components/SessionProposalChainCard';
import ModalStore from '@/store/ModalStore';
import { cosmosAddresses } from '@/utils/CosmosWalletUtil';
import { eip155Addresses } from '@/utils/EIP155WalletUtil';
import { isCosmosChain, isEIP155Chain, isSolanaChain } from '@/utils/HelperUtil';
import { solanaAddresses } from '@/utils/SolanaWalletUtil';
import { signClient } from '@/utils/WalletConnectUtil';
import { Button, Divider, Modal, Text } from '@nextui-org/react';
import { getSdkError } from '@walletconnect/utils';
import { Fragment, useState } from 'react';
export default function SessionProposalModal() {
    var _a;
    var _b = useState({}), selectedAccounts = _b[0], setSelectedAccounts = _b[1];
    var hasSelected = Object.keys(selectedAccounts).length;
    // Get proposal data and wallet address from store
    var proposal = (_a = ModalStore.state.data) === null || _a === void 0 ? void 0 : _a.proposal;
    // Ensure proposal is defined
    if (!proposal) {
        return <Text>Missing proposal data</Text>;
    }
    // Get required proposal data
    var id = proposal.id, params = proposal.params;
    var proposer = params.proposer, requiredNamespaces = params.requiredNamespaces, relays = params.relays;
    // Add / remove address from EIP155 selection
    function onSelectAccount(chain, account) {
        var _a, _b, _c;
        if ((_a = selectedAccounts[chain]) === null || _a === void 0 ? void 0 : _a.includes(account)) {
            var newSelectedAccounts_1 = (_b = selectedAccounts[chain]) === null || _b === void 0 ? void 0 : _b.filter(function (a) { return a !== account; });
            setSelectedAccounts(function (prev) {
                var _a;
                return (__assign(__assign({}, prev), (_a = {}, _a[chain] = newSelectedAccounts_1, _a)));
            });
        }
        else {
            var prevChainAddresses_1 = (_c = selectedAccounts[chain]) !== null && _c !== void 0 ? _c : [];
            setSelectedAccounts(function (prev) {
                var _a;
                return (__assign(__assign({}, prev), (_a = {}, _a[chain] = __spreadArray(__spreadArray([], prevChainAddresses_1, true), [account], false), _a)));
            });
        }
    }
    // Hanlde approve action, construct session namespace
    function onApprove() {
        return __awaiter(this, void 0, void 0, function () {
            var namespaces_1, acknowledged;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!proposal) return [3 /*break*/, 3];
                        namespaces_1 = {};
                        Object.keys(requiredNamespaces).forEach(function (key) {
                            var accounts = [];
                            requiredNamespaces[key].chains.map(function (chain) {
                                selectedAccounts[key].map(function (acc) { return accounts.push("".concat(chain, ":").concat(acc)); });
                            });
                            namespaces_1[key] = {
                                accounts: accounts,
                                methods: requiredNamespaces[key].methods,
                                events: requiredNamespaces[key].events
                            };
                        });
                        return [4 /*yield*/, signClient.approve({
                                id: id,
                                relayProtocol: relays[0].protocol,
                                namespaces: namespaces_1
                            })];
                    case 1:
                        acknowledged = (_a.sent()).acknowledged;
                        return [4 /*yield*/, acknowledged()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        ModalStore.close();
                        return [2 /*return*/];
                }
            });
        });
    }
    // Hanlde reject action
    function onReject() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!proposal) return [3 /*break*/, 2];
                        return [4 /*yield*/, signClient.reject({
                                id: id,
                                reason: getSdkError('USER_REJECTED_METHODS')
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        ModalStore.close();
                        return [2 /*return*/];
                }
            });
        });
    }
    // Render account selection checkboxes based on chain
    function renderAccountSelection(chain) {
        if (isEIP155Chain(chain)) {
            return (<ProposalSelectSection addresses={eip155Addresses} selectedAddresses={selectedAccounts[chain]} onSelect={onSelectAccount} chain={chain}/>);
        }
        else if (isCosmosChain(chain)) {
            return (<ProposalSelectSection addresses={cosmosAddresses} selectedAddresses={selectedAccounts[chain]} onSelect={onSelectAccount} chain={chain}/>);
        }
        else if (isSolanaChain(chain)) {
            return (<ProposalSelectSection addresses={solanaAddresses} selectedAddresses={selectedAccounts[chain]} onSelect={onSelectAccount} chain={chain}/>);
        }
    }
    return (<Fragment>
      <RequestModalContainer title="Session Proposal">
        <ProjectInfoCard metadata={proposer.metadata}/>

        {/* TODO(ilja) Relays selection */}

        <Divider y={2}/>

        {Object.keys(requiredNamespaces).map(function (chain) {
            return (<Fragment key={chain}>
              <Text h4 css={{ marginBottom: '$5' }}>{"Review ".concat(chain, " permissions")}</Text>
              <SessionProposalChainCard requiredNamespace={requiredNamespaces[chain]}/>
              {renderAccountSelection(chain)}
              <Divider y={2}/>
            </Fragment>);
        })}
      </RequestModalContainer>

      <Modal.Footer>
        <Button auto flat color="error" onClick={onReject}>
          Reject
        </Button>

        <Button auto flat color="success" onClick={onApprove} disabled={!hasSelected} css={{ opacity: hasSelected ? 1 : 0.4 }}>
          Approve
        </Button>
      </Modal.Footer>
    </Fragment>);
}
//# sourceMappingURL=SessionProposalModal.jsx.map