import {HiOutlineSearch} from "react-icons/hi"


export default function OverviewHeader() {
  return (
    <div className='flex justify-between'>
        <div className='border rounded-lg p-2 min-w-[8rem] flex items-center justify-center'>
            <span>Overview</span>
        </div>
        <div className='border rounded-lg p-2 min-w-[5rem] flex items-center justify-center'>
            <HiOutlineSearch/>
        </div>
    </div>
  )
}