import AccountCard from '@/components/AccountCard';
import AccountPicker from '@/components/AccountPicker';
import PageHeader from '@/components/PageHeader';
import { COSMOS_MAINNET_CHAINS } from '@/data/COSMOSData';
import { EIP155_MAINNET_CHAINS, EIP155_TEST_CHAINS } from '@/data/EIP155Data';
import { SOLANA_MAINNET_CHAINS, SOLANA_TEST_CHAINS } from '@/data/SolanaData';
import SettingsStore from '@/store/SettingsStore';
import { Text } from '@nextui-org/react';
import { Fragment } from 'react';
import { useSnapshot } from 'valtio';
export default function HomePage() {
    var _a = useSnapshot(SettingsStore.state), testNets = _a.testNets, eip155Address = _a.eip155Address, cosmosAddress = _a.cosmosAddress, solanaAddress = _a.solanaAddress;
    return (<Fragment>
      <PageHeader title="Accounts">
        <AccountPicker />
      </PageHeader>
      <Text h4 css={{ marginBottom: '$5' }}>
        Mainnets
      </Text>
      {Object.entries(EIP155_MAINNET_CHAINS).map(function (_a) {
            var namespace = _a[0], _b = _a[1], name = _b.name, logo = _b.logo, rgb = _b.rgb;
            return (<AccountCard key={name} name={name} logo={logo} rgb={rgb} address={"".concat(namespace, ":").concat(eip155Address)}/>);
        })}
      {Object.entries(COSMOS_MAINNET_CHAINS).map(function (_a) {
            var namespace = _a[0], _b = _a[1], name = _b.name, logo = _b.logo, rgb = _b.rgb;
            return (<AccountCard key={name} name={name} logo={logo} rgb={rgb} address={"".concat(namespace, ":").concat(cosmosAddress)}/>);
        })}
      {Object.entries(SOLANA_MAINNET_CHAINS).map(function (_a) {
            var namespace = _a[0], _b = _a[1], name = _b.name, logo = _b.logo, rgb = _b.rgb;
            return (<AccountCard key={name} name={name} logo={logo} rgb={rgb} address={"".concat(namespace, ":").concat(solanaAddress)}/>);
        })}

      {testNets ? (<Fragment>
          <Text h4 css={{ marginBottom: '$5' }}>
            Testnets
          </Text>
          {Object.entries(EIP155_TEST_CHAINS).map(function (_a) {
                var namespace = _a[0], _b = _a[1], name = _b.name, logo = _b.logo, rgb = _b.rgb;
                return (<AccountCard key={name} name={name} logo={logo} rgb={rgb} address={"".concat(namespace, ":").concat(eip155Address)}/>);
            })}
          {Object.entries(SOLANA_TEST_CHAINS).map(function (_a) {
                var namespace = _a[0], _b = _a[1], name = _b.name, logo = _b.logo, rgb = _b.rgb;
                return (<AccountCard key={name} name={name} logo={logo} rgb={rgb} address={"".concat(namespace, ":").concat(solanaAddress)}/>);
            })}
        </Fragment>) : null}
    </Fragment>);
}
//# sourceMappingURL=index.jsx.map