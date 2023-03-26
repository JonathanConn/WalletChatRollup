import Layout from '@/components/Layout';
import Modal from '@/components/Modal';
import { chatTheme } from '@/config/chatTheme';
import useInitialization from '@/hooks/useInitialization';
import useWalletConnectEventsManager from '@/hooks/useWalletConnectEventsManager';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { Fragment } from 'react';
import '../../public/main.css';
var theme = createTheme({
    type: 'dark',
    theme: chatTheme
});
export default function App(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    // Step 1 - Initialize wallets and wallet connect client
    var initialized = useInitialization();
    // Step 2 - Once initialized, set up wallet connect event manager
    useWalletConnectEventsManager(initialized);
    return (<Fragment>
      {/* Hacking around this issue with missing shim for `global -> globalThis` */}
      {/* https://github.com/webpack/webpack/issues/10035#issuecomment-603231120 */}
      <script>global = globalThis</script>
      <NextUIProvider theme={theme}>
        <Layout initialized={initialized}>
          <Component {...pageProps}/>
        </Layout>

        <Modal />
      </NextUIProvider>
    </Fragment>);
}
//# sourceMappingURL=index.jsx.map