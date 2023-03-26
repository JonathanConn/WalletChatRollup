import { __assign } from "tslib";
/**
 * Chains
 */
export var SOLANA_MAINNET_CHAINS = {
    'solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ': {
        chainId: '4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ',
        name: 'Solana',
        logo: '/chain-logos/solana-4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ.png',
        rgb: '30, 240, 166',
        rpc: ''
    }
};
export var SOLANA_TEST_CHAINS = {
    'solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K': {
        chainId: '8E9rvCKLFQia2Y35HXjjpWzj8weVo44K',
        name: 'Solana Devnet',
        logo: '/chain-logos/solana-4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ.png',
        rgb: '30, 240, 166',
        rpc: ''
    }
};
export var SOLANA_CHAINS = __assign(__assign({}, SOLANA_MAINNET_CHAINS), SOLANA_TEST_CHAINS);
/**
 * Methods
 */
export var SOLANA_SIGNING_METHODS = {
    SOLANA_SIGN_TRANSACTION: 'solana_signTransaction',
    SOLANA_SIGN_MESSAGE: 'solana_signMessage'
};
//# sourceMappingURL=SolanaData.js.map