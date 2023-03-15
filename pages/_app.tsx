import '@/styles/globals.less';
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import Layout from '@/components/Layout'

// import 'antd/dist/antd.css'
import { ReactElement, ReactNode } from 'react'
import { StoreProvider } from '@/store';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => <StoreProvider><Layout>{page}</Layout></StoreProvider>)
  return <StoreProvider>{getLayout(<Component {...pageProps} />)}</StoreProvider>
}
