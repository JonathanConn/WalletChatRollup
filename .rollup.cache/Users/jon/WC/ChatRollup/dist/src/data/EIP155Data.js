/**
 * @desc Refference list of eip155 chains
 * @url https://chainlist.org
 */
import { __assign } from "tslib";
/**
 * Chains
 */
export var EIP155_MAINNET_CHAINS = {
    'eip155:1': {
        chainId: 1,
        name: 'Ethereum',
        logo: '/chain-logos/eip155-1.png',
        rgb: '99, 125, 234',
        rpc: 'https://cloudflare-eth.com/'
    },
    'eip155:43114': {
        chainId: 43114,
        name: 'Avalanche C-Chain',
        logo: '/chain-logos/eip155-43113.png',
        rgb: '232, 65, 66',
        rpc: 'https://api.avax.network/ext/bc/C/rpc'
    },
    'eip155:137': {
        chainId: 137,
        name: 'Polygon',
        logo: '/chain-logos/eip155-137.png',
        rgb: '130, 71, 229',
        rpc: 'https://polygon-rpc.com/'
    }
};
export var EIP155_TEST_CHAINS = {
    'eip155:42': {
        chainId: 42,
        name: 'Ethereum Kovan',
        logo: '/chain-logos/eip155-1.png',
        rgb: '99, 125, 234',
        rpc: 'https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
    },
    'eip155:43113': {
        chainId: 43113,
        name: 'Avalanche Fuji',
        logo: '/chain-logos/eip155-43113.png',
        rgb: '232, 65, 66',
        rpc: 'https://api.avax-test.network/ext/bc/C/rpc'
    },
    'eip155:80001': {
        chainId: 80001,
        name: 'Polygon Mumbai',
        logo: '/chain-logos/eip155-137.png',
        rgb: '130, 71, 229',
        rpc: 'https://matic-mumbai.chainstacklabs.com'
    }
};
export var EIP155_CHAINS = __assign(__assign({}, EIP155_MAINNET_CHAINS), EIP155_TEST_CHAINS);
/**
 * Methods
 */
export var EIP155_SIGNING_METHODS = {
    PERSONAL_SIGN: 'personal_sign',
    ETH_SIGN: 'eth_sign',
    ETH_SIGN_TRANSACTION: 'eth_signTransaction',
    ETH_SIGN_TYPED_DATA: 'eth_signTypedData',
    ETH_SIGN_TYPED_DATA_V3: 'eth_signTypedData_v3',
    ETH_SIGN_TYPED_DATA_V4: 'eth_signTypedData_v4',
    ETH_SEND_RAW_TRANSACTION: 'eth_sendRawTransaction',
    ETH_SEND_TRANSACTION: 'eth_sendTransaction'
};
//# sourceMappingURL=EIP155Data.js.map