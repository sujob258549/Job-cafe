import { NavLink, useLoaderData } from "react-router-dom";
import Job from "../Jod/Job";
import Banner from "../Banner/Banner";
import { useState } from "react";

const Fastpage = () => {
    const [joblength, setJoblenth] = useState(4)
    const jobs = useLoaderData();
    return (



        <div>
            <div className="">
                <Banner></Banner>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-5 py-10 max-lg:py-20">
                {
                    jobs.slice(0, joblength).map(job => <Job key={job.id} job={job}></Job>)
                }

            </div>
            <div className={joblength === jobs.length && "hidden"}>
            <NavLink  onClick={() => setJoblenth(jobs.length)} className="btn w-32 text-center flex justify-center mx-auto btn-primary mt-5 mb-10 md:mb-20">Show All</NavLink>
            </div>
        </div>
    );
};

export default Fastpage;