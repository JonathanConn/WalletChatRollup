import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
/**
 * Components
 */
export default function RouteTransition(_a) {
    var children = _a.children;
    var pathname = useRouter().pathname;
    return (<AnimatePresence exitBeforeEnter>
      <motion.div className="routeTransition" key={pathname} initial={{ opacity: 0, translateY: 7 }} animate={{ opacity: 1, translateY: 0 }} exit={{ opacity: 0, translateY: 7 }} transition={{ duration: 0.18 }}>
        {children}
      </motion.div>
    </AnimatePresence>);
}
//# sourceMappingURL=RouteTransition.jsx.map