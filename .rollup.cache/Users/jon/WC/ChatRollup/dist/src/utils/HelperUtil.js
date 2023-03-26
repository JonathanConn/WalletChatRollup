import { COSMOS_MAINNET_CHAINS } from '@/data/COSMOSData';
import { EIP155_CHAINS } from '@/data/EIP155Data';
import { SOLANA_CHAINS } from '@/data/SolanaData';
import { utils } from 'ethers';
/**
 * Truncates string (in the middle) via given lenght value
 */
export function truncate(value, length) {
    if ((value === null || value === void 0 ? void 0 : value.length) <= length) {
        return value;
    }
    var separator = '...';
    var stringLength = length - separator.length;
    var frontLength = Math.ceil(stringLength / 2);
    var backLength = Math.floor(stringLength / 2);
    return value.substring(0, frontLength) + separator + value.substring(value.length - backLength);
}
/**
 * Converts hex to utf8 string if it is valid bytes
 */
export function convertHexToUtf8(value) {
    if (utils.isHexString(value)) {
        return utils.toUtf8String(value);
    }
    return value;
}
/**
 * Gets message from various signing request methods by filtering out
 * a value that is not an address (thus is a message).
 * If it is a hex string, it gets converted to utf8 string
 */
export function getSignParamsMessage(params) {
    var message = params.filter(function (p) { return !utils.isAddress(p); })[0];
    return convertHexToUtf8(message);
}
/**
 * Gets data from various signTypedData request methods by filtering out
 * a value that is not an address (thus is data).
 * If data is a string convert it to object
 */
export function getSignTypedDataParamsData(params) {
    var data = params.filter(function (p) { return !utils.isAddress(p); })[0];
    if (typeof data === 'string') {
        return JSON.parse(data);
    }
    return data;
}
/**
 * Get our address from params checking if params string contains one
 * of our wallet addresses
 */
export function getWalletAddressFromParams(addresses, params) {
    var paramsString = JSON.stringify(params);
    var address = '';
    addresses.forEach(function (addr) {
        if (paramsString.includes(addr)) {
            address = addr;
        }
    });
    return address;
}
/**
 * Check if chain is part of EIP155 standard
 */
export function isEIP155Chain(chain) {
    return chain.includes('eip155');
}
/**
 * Check if chain is part of COSMOS standard
 */
export function isCosmosChain(chain) {
    return chain.includes('cosmos');
}
/**
 * Check if chain is part of SOLANA standard
 */
export function isSolanaChain(chain) {
    return chain.includes('solana');
}
/**
 * Formats chainId to its name
 */
export function formatChainName(chainId) {
    var _a, _b, _c, _d, _e, _f;
    return ((_f = (_d = (_b = (_a = EIP155_CHAINS[chainId]) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : (_c = COSMOS_MAINNET_CHAINS[chainId]) === null || _c === void 0 ? void 0 : _c.name) !== null && _d !== void 0 ? _d : (_e = SOLANA_CHAINS[chainId]) === null || _e === void 0 ? void 0 : _e.name) !== null && _f !== void 0 ? _f : chainId);
}
//# sourceMappingURL=HelperUtil.js.map