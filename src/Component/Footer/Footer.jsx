import './style.css'
const Footer = () => {
    return (
        <div className=" text-center md:text-left">
            <footer className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5 py-10  text-base-content">
                <aside className="flex flex-col gap-4">
                   <img width={'50px'} className="z-50 md:mx-0 mx-auto" src="https://i.ibb.co/MkS6J2x/removal-ai-5f7861b9-e672-475d-bf88-da3ad77bb080-1111.png" alt="" />
                    <p className='text-xl'>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </aside>
                <nav className="flex flex-col texts justify-around ml-0 md:ml-7">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className="flex flex-col texts gap-4">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="flex flex-col texts gap-4 ml-0 md:ml-6">
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;