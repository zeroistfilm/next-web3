import {Account} from '../components/Account'
import {Balance} from '../components/Balance'
import {BlockNumber} from '../components/BlockNumber'
import {Connect} from '../components/Connect'
import {Connected} from '../components/Connected'
import {NetworkSwitcher} from '../components/NetworkSwitcher'
import {ReadContract} from '../components/ReadContract'
import {ReadContracts} from '../components/ReadContracts'
import {ReadContractsInfinite} from '../components/ReadContractsInfinite'
import {SendTransaction} from '../components/SendTransaction'
import {SendTransactionPrepared} from '../components/SendTransactionPrepared'
import {SignMessage} from '../components/SignMessage'
import {SignTypedData} from '../components/SignTypedData'
import {Token} from '../components/Token'
import {WatchContractEvents} from '../components/WatchContractEvents'
import {WatchPendingTransactions} from '../components/WatchPendingTransactions'
import {WriteContract} from '../components/WriteContract'
import {WriteContractPrepared} from '../components/WriteContractPrepared'
import '../../styles/tailwind.css'
import React from 'react'

export default function Page() {
    const COMPONENTS = [
        {name: 'NetworkSwitcher', component: <NetworkSwitcher/>},
        {name: 'Account', component: <Account/>},
        {name: 'Balance', component: <Balance/>},
        {name: 'BlockNumber', component: <BlockNumber/>},
        {name: 'ReadContract', component: <ReadContract/>},
        {name: 'ReadContracts', component: <ReadContracts/>},
        {name: 'ReadContractsInfinite', component: <ReadContractsInfinite/>},
        {name: 'SendTransaction', component: <SendTransaction/>},
        {name: 'SendTransactionPrepared', component: <SendTransactionPrepared/>},
        {name: 'SignMessage', component: <SignMessage/>},
        {name: 'SignTypedData', component: <SignTypedData/>},
        {name: 'Token', component: <Token/>},
        {name: 'WatchContractEvents', component: <WatchContractEvents/>},
        {name: 'WatchPendingTransactions', component: <WatchPendingTransactions/>},
        {name: 'WriteContract', component: <WriteContract/>},
        {name: 'WriteContractPrepared', component: <WriteContractPrepared/>},
    ]


    return (
        <div className="grid grid-cols-1 gap-2 text-xs mx-10 my-5">
            <h1 className="font-sans hover:font-serif font-bold text-2xl">wagmi + Next.js</h1>
            <Connect/>
            <Connected>
                {COMPONENTS.map(({title, component}, index) => (
                    <React.Fragment key={index}>
                        <hr/>
                        <div className="col-span-full">
                            <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
                            <div className="border-2 border-gray-200 p-4 rounded-md shadow-sm">
                                {component}
                            </div>
                        </div>
                        <br/>
                    </React.Fragment>
                ))}
            </Connected>
        </div>

    )
}
