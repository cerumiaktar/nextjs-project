import { services } from "@/lib/services"
import ServiceCard from "../Cards/ServiceCard";

export default function Services() {
    console.log(services);
    return (
        <div className="container mx-auto mb-12">
            <div>
                <div className="text-center">
                    <p className="text-xl font-bold text-orange-700">Service</p>
                    <h1 className="text-4xl font-bold">Our Service Area</h1>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                </div>
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 ">
                    {
                        services.map((service) =>(<ServiceCard service={service} key={service._id}></ServiceCard>))
                    }
                </div>
            </div>
        </div>
    )
}
