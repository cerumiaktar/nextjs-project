

export default function About() {
    return (
        <div className="container mx-auto mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative">
                    <img className="rounded-2xl w-full " src="/assets/images/about_us/person.jpg" alt="" />
                    <div className="absolute right-0 -bottom-12">
                        <img className="w-[350px] rounded-2xl border-8 border-white" src="/assets/images/about_us/parts.jpg" alt="" />
                    </div>
                </div>
                <div className="space-y-4">
                    <p className="text-[#FF3811] font-bold">About Us</p>
                    <h1 className="text-4xl font-bold">We are qualified & of experience in this field</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. <br /> <br />
                        the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.
                    </p>
                    <button className="btn bg-[#FF3811]">Get More Info</button>
                </div>
            </div>
        </div>
    )
}
