import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getlocalstorase } from "../LocalStorase/LocalStorase";
import { IoLocationOutline } from "react-icons/io5";
import { FaCommentDollar, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";

const Applyjobs = () => {
    const [storedata, setstoredata] = useState([]);
    const jobs = useLoaderData();

    useEffect(() => {
        const getdata = getlocalstorase();
        const applyed = [];
        if (jobs.length > 0) {
            // const finddata = jobs.find(job => getinteger.includes(job.id));
            // applyed.push(finddata);
            for (const id of getdata) {
                const findData = jobs.find(job => job.id === id);
                applyed.push(findData)

            }
        }
        setstoredata(applyed);
    }, []);

    return (
        <div>
            <h2>Applied: {storedata.length}</h2>
            {
                storedata.map(job => (
                    <div className="flex  flex-col md:flex-row gap-2 my-10 md:my-20">

                        <div className="card  card-compact px-5 py-10 shadows flex flex-col">
                            <h1 className="text-4xl font-bold">Detali page</h1>
                            <figure><img src={job.logo} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{job.job_title}</h2>
                                <h2 className='text-xl font-bold py-3'>{job.company_name}</h2>
                                <p className="text-[18px]">{job.job_responsibility}</p>
                                <p className="text-[18px]"> {job.job_description}</p>
                                <div className="mt-5">
                                    <button className='btn btn-outline mr-5 '>{job.remote_or_onsite}</button>
                                    <button className='btn btn-outline '>{job.job_type}</button>
                                </div>
                                <p className="text-[18px] mt-5">{job.educational_requirements}</p>
                                <p className="py-3 flex gap-3  items-center text-[18px]"> <GrUserExpert></GrUserExpert>{job.experiences}</p>
                                <p className="py-1 flex gap-3 text-[18px] items-center"><FaPhone></FaPhone>{job.contact_information.phone}</p>
                                <p className="py-1 flex gap-3 text-[18px] items-center"><MdEmail></MdEmail> {job.contact_information.email}</p>
                                <p className="py-1 flex gap-3 text-[18px] items-center"> <IoLocationOutline className="text-3xl -ml-1"></IoLocationOutline>{job.contact_information.address}</p>
                                <div className='flex gap-2 pt-3'>
                                    <FaCommentDollar className='text-xl'></FaCommentDollar>
                                    <p className='text-[18px]  flex-grow'>{job.salary}</p>
                                </div>

                                <div className='flex gap-2 pt-3'>
                                    <IoLocationOutline className='text-2xl -ml-1'></IoLocationOutline>
                                    <p className='text-[18px]  flex-grow'>{job.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Applyjobs;
