'use client'
import Footer from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { store } from '@/store'
import React from 'react'
import { Provider } from 'react-redux'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </>
        </Provider>
    )
}
