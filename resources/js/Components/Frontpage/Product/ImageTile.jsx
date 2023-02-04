export default function ImageTile({ imageUrl, className }) {

    return (<div className={'w-[48px] h-[46px] mr-2 rounded-xl p-1' + className} 
        style={{background: 'linear-gradient(222.4deg, rgba(36, 36, 36, 0.0001) -11.24%, rgba(16, 16, 16, 0.6) 100%)'}}>
            <img src={imageUrl} alt="product-tile" className={'mx-auto w-full'} />
        </div>)
}