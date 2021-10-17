import React from 'react'
import Header from "../Header";
import Head from "next/head";

const Layout = ({children}) => {
    return (
        <div>
             <Head>
        <title>SME souk</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
            <Header />
            {children}
        </div>
    )
}

export default Layout
