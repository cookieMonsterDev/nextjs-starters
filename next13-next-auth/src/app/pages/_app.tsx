import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  console.log('test')

  return <Component {...pageProps} />
}