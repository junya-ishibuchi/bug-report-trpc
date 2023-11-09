import '@/styles/globals.css'
import { trpc } from '../utils/trpc';
import {AppProps, AppType} from "next/app";
const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
export default trpc.withTRPC(MyApp);