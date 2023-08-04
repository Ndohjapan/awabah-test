import {HiOutlineSearch} from "react-icons/hi"


// eslint-disable-next-line react/prop-types
export default function OverviewHeader({data}) {
  return (
    <div className='flex justify-between'>
        <div className='shadow-3xl rounded-lg p-2 min-w-[8rem] flex items-center justify-center'>
            <span>{data}</span>
        </div>
        <div className='shadow-3xl rounded-lg p-2 min-w-[5rem] flex items-center justify-center'>
            <HiOutlineSearch/>
        </div>
    </div>
  )
}