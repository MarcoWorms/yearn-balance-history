import { WithYearn } from '@yearn-finance/web-lib/contexts'
import { Card } from '@yearn-finance/web-lib/components'
import { Button } from '@yearn-finance/web-lib/components';
// import { useWeb3 } from '@yearn-finance/web-lib/contexts'

const Operation = props => (
  <div className=" p-2">
    <h2 className="border-b-2 border-slate-200">Date</h2>
    <div className="flex justify-between border-b-2 border-slate-200">
      <div className="flex flex-col items-center"> 
        <span>Deposit</span>
        <span>2:35 PM</span>
      </div> 
      <span>Amount Then</span>
      <span>Amount Now</span>
    </div>
  </div>
)

export default function IndexPage() {
  // const { address, ens, onConnect } = useWeb3()
  
  return (
    // <WithYearn>
      <div className="h-screen bg-slate-100 space-y-2">
        <div className="bg-white p-2 flex justify-between items-center">
          <h1 className="text-2xl">History</h1>
          <div className="flex flex-col items-center">
            <p>{'0x012345'}</p>
            <Button variant={'filled'}>Login</Button>
          </div>
        </div>
        <div className="bg-white p-2 flex-col">
          <Operation />
          <Operation />
        </div>
      </div>
    // </WithYearn>
  )
}
