import { AppProps } from 'next/app'
import { Component } from 'react'
import '../src/styles/globals.scss'

export default class App extends Component {
  render() {
    const { Component, pageProps }: any = this.props;
    return (
      <Component {...pageProps} />
    )
  };
}