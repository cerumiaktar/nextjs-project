import Image from "next/image";


export default function ServiceCard({ service }) {
    const { title, img, price } = service || {};
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <figure className="px-10 pt-10">
                        <Image src={img} height={120} width={430} alt={title}></Image>
                    </figure>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions items-center justify-between">
                        <h6>{price}</h6>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
