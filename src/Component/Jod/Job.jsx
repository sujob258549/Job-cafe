import { NavLink } from 'react-router-dom';
import './style.css';
import { IoLocationOutline } from "react-icons/io5";
import { FaCommentDollar } from "react-icons/fa";


import PropTypes from 'prop-types';
const Job = ({ job }) => {

    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div>
            <div>
                <div className="card card-compact px-5 py-10 shadows flex flex-col h-[470px]">
                    <figure><img src={logo} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{job_title}</h2>
                        <h2 className='text-xl font-bold py-3'>{company_name}</h2>
                        <div>
                            <button className='btn btn-outline mr-5 '>{remote_or_onsite}</button>
                            <button className='btn btn-outline '>{job_type}</button>
                        </div>
                        <div className='flex gap-6 flex-grow mt-4'>
                            <div className='flex gap-2'>
                            <IoLocationOutline className='text-3xl'></IoLocationOutline>
                                <p className='text-[16px] flex-grow'>{location}</p>
                            </div>
                            <div className='flex gap-2'>
                                <FaCommentDollar className='text-3xl'></FaCommentDollar>
                                <p className='text-[16px]  flex-grow'>{salary}</p>
                            </div>
                        </div>

                        <NavLink to={`/show/${id}`} className="btn btn-primary mt-5">Buy Now</NavLink>

                    </div>
                </div>    

            </div>
           
        </div>
    );

};
Job.propTypes = {
    job: PropTypes.object
};

export default Job;
