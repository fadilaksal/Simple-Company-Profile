import { Link } from "@inertiajs/inertia-react";
import { FaStar } from "react-icons/fa";

export default function ProductCard({ linkProduct = '' }) {
    return (<Link href={linkProduct}>
            <div className='bg-white rounded-xl p-6 relative font-Proxima-Nova'
                style={{boxShadow: '0px 16px 24px rgba(190, 190, 190, 0.16)'}}>
                <div className="absolute top-7 right-7">
                    <FaStar className='inline text-orange-300'/> 5
                </div>
                <img src="/assets/images/welcome-product.png" alt="image-product" className='m-auto w-[200px]' />
                <h3 className='md:text-[20pt] font-extrabold mt-5'>Suntik Steril</h3>
                <div className='flex flex-col md:flex-row mt-1 md:justify-between items-start md:items-center'>
                    <span className='mt-2 text-orange-600 font-extrabold'>Rp. 10.000</span>
                    <span className='mt-2 bg-green-200 text-[10pt] text-green-800 py-1 px-2 rounded-xl'>Ready Stok</span>
                </div>
            </div>
        </Link>)
}