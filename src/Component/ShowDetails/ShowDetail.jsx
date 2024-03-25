import { useLoaderData, useParams } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { FaCommentDollar, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";


const ShowDetail = () => {
    const jobs = useLoaderData();
    const { id } = useParams();

    const job = jobs.find(job => job.id === parseInt(id));
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_responsibility, educational_requirements, email, experiences, contact_information, job_description } = job;

    return (

        <div className="flex  flex-col md:flex-row gap-2 my-10 md:my-20">

            <div className="card w-full md:w-[60%] lg:w-[70%] card-compact px-5 py-10 shadows flex flex-col">
                <h1 className="text-4xl font-bold">Detali page</h1>
                <figure><img src={logo} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <h2 className='text-xl font-bold py-3'>{company_name}</h2>
                    <p className="text-[18px]">{job_responsibility}</p>
                    <p className="text-[18px]"> {job_description}</p>
                    <div className="mt-5">
                        <button className='btn btn-outline mr-5 '>{remote_or_onsite}</button>
                        <button className='btn btn-outline '>{job_type}</button>
                    </div>

                </div>
            </div>
            <div className="shadows p-5 rounded-lg w-full md:w-[40%] lg:w-[30%]">

                <p>{email}</p>
                <p>{educational_requirements}</p>
                <p className="py-3 flex gap-3 items-center"> <GrUserExpert></GrUserExpert>{experiences}</p>
                <p className="py-1 flex gap-3 items-center"><FaPhone></FaPhone>{contact_information.phone}</p>
                <p className="py-1 flex gap-3 items-center"><MdEmail></MdEmail> {contact_information.email}</p>
                <p className="py-1 flex gap-3  items-center"> <IoLocationOutline className="text-3xl -ml-1"></IoLocationOutline>{contact_information.address}</p>
                    <div className='flex gap-2 pt-3'>
                        <FaCommentDollar className='text-xl'></FaCommentDollar>
                        <p className='text-[16px]  flex-grow'>{salary}</p>
                    </div>

                    <div className='flex gap-2 pt-3'>
                        <IoLocationOutline className='text-2xl -ml-1'></IoLocationOutline>
                        <p className='text-[16px]  flex-grow'>{location}</p>
                    </div>

                </div>
            </div>

    );
};

export default ShowDetail;