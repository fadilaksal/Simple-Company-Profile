import { FaHospital, FaMapPin } from "react-icons/fa";

export default function CardLayanan ({ src = '', title = '', price = '', hospital = '', location = '' }) {

    return (
            <div className='bg-white rounded-xl relative py-8 px-4 font-Proxima-Nova text-[16px] font-bold'  style={{boxShadow: '0px 16px 24px rgba(190, 190, 190, 0.16)'}}>
                <img src={src} alt="" className='w-[260px] m-auto md:w-[200px] md:absolute md:top-10 md:-right-6 lg:-right-8 z-50' />

                <div className='px-4 py-4 items-center'>
                    <h2 className=''>{title}</h2>
                    <p className='mt-1 text-orange-500'>Rp. {price}</p>
                    <p className='mt-3'><FaHospital className='inline mr-2' />{hospital}</p>
                    <p className='mt-1 font-normal text-[14px] text-[#BEBEBE]'>
                        <FaMapPin className='inline mr-2 text-title' />{location}
                    </p>
                </div>
            </div>)
}