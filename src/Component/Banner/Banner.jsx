
import user from '../../assets/images/user.png'
const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row items-center py-14 md:py-20'>
            <div className='flex-1'>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</h1>
            <p className="py-10 text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, reiciendis illum sint tempore libero totam facilis at hic mollitia repudiandae similique minima asperiores beatae expedita sapiente exercitationem, voluptates eligendi. Earum!</p>
            <button className="texts-xl text-xl btn font-bold btn-primary">Sow button</button>
            </div>
            <div className='flex-1'>
                <img src={user} alt="" />
            </div>
        </div>
    );
};

export default Banner;