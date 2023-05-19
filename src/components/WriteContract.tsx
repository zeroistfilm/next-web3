'use client'

import { BaseError } from 'viem'
import { useContractWrite, useWaitForTransaction } from 'wagmi'

import { wagmiContractConfig } from './contracts'
import { stringify } from '../utils/stringify'

export function WriteContract() {
  const { write, data, error, isLoading, isError } = useContractWrite({
    ...wagmiContractConfig,
    functionName: 'mint',
  })
  const {
    data: receipt,
    isLoading: isPending,
    isSuccess,
  } = useWaitForTransaction({ hash: data?.hash })

  return (
    <>
      <h3>Mint a wagmi</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const formData = new FormData(e.target as HTMLFormElement)
          const tokenId = formData.get('tokenId') as string
          write({
            args: [BigInt(tokenId)],
          })
        }}
      >
        <input name="tokenId" placeholder="token id" />
        <button disabled={isLoading} type="submit">
          Mint
        </button>
      </form>

      {isLoading && <div>Check wallet...</div>}
      {isPending && <div>Transaction pending...</div>}
      {isSuccess && (
        <>
          <div>Transaction Hash: {data?.hash}</div>
          <div>
            Transaction Receipt: <pre>{stringify(receipt, null, 2)}</pre>
          </div>
        </>
      )}
      {isError && <div>{(error as BaseError)?.shortMessage}</div>}
    </>
  )
}


//import { BaseError } from 'viem'
// import { useContractWrite, useWaitForTransaction } from 'wagmi'
//
// import { wagmiContractConfig } from './contracts'
// import { stringify } from '../utils/stringify'
//
// export function DepositMultiple() {
//   const { write, data, error, isLoading, isError } = useContractWrite({
//     ...wagmiContractConfig,
//     functionName: 'depositMultiple',
//   })
//   const {
//     data: receipt,
//     isLoading: isPending,
//     isSuccess,
//   } = useWaitForTransaction({ hash: data?.hash })
//
//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     const formData = new FormData(e.target as HTMLFormElement)
//     const tokenType = formData.get('tokenType') as string
//     const tokenAddress = formData.get('tokenAddress') as string
//     const amount = formData.get('amount') as string
//     const tokenIdsCSV = formData.get('tokenIds') as string
//     const tokenIds = tokenIdsCSV.split(',').map(id => BigInt(id.trim()))
//
//     const depositRequest = {
//       tokenType,
//       tokenAddress,
//       amount: BigInt(amount),
//       tokenIds
//     }
//
//     write({ args: [depositRequest] })
//   }
//
//   return (
//     <>
//       <h3>Deposit Multiple</h3>
//       <form onSubmit={handleSubmit}>
//         <input name="tokenType" placeholder="token type" />
//         <input name="tokenAddress" placeholder="token address" />
//         <input name="amount" placeholder="amount" />
//         <input name="tokenIds" placeholder="token ids (comma-separated)" />
//         <button disabled={isLoading} type="submit">
//           Deposit
//         </button>
//       </form>
//
//       {isLoading && <div>Check wallet...</div>}
//       {isPending && <div>Transaction pending...</div>}
//       {isSuccess && (
//         <>
//           <div>Transaction Hash: {data?.hash}</div>
//           <div>
//             Transaction Receipt: <pre>{stringify(receipt, null, 2)}</pre>
//           </div>
//         </>
//       )}
//       {isError && <div>{(error as BaseError)?.shortMessage}</div>}
//     </>
//   )
// }