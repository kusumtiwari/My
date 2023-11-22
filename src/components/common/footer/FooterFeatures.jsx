const featuresarray = [
    {
        icon: "/features-images/featuresimg1.png",
        heading: "Express Delievery",
        subheading: 'Express delivery on orders over Nepal',
    },
    {
        icon: "/features-images/featuresimg2.png",
        heading: "Trust Worthy and Easy",
        subheading: 'We are committed to protecting the security of your information.',
    },
    {
        icon: "/features-images/featuresimg3.png",
        heading: "Secure Shopping",
        subheading: 'We are committed to protecting the security of your information.',
    },
    {
        icon: "/features-images/featuresimg4.png",
        heading: "Quality Checked",
        subheading: 'We are providing top quality products and service.',
    },
]


export default function FooterFeatures(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-4">
           {
         featuresarray.map( (item,index) => (
            <div className="flex border border-grey-400 items-center h-[15vh] pl-14 " key={index}>
            <img src={item.icon} alt="icons" className="w-8 h-8 mr-6 md:mr-4 mb-3 md:mb-6">
            </img>
            <div className="flex flex-col w-[75%] text-primary-blue">
                <h1 className="text-base font-semibold">{item.heading}</h1>
                <h1 className="text-sm" >{item.subheading}</h1>
            </div>
            </div>
         ))
           } 
        </div>
    )
}