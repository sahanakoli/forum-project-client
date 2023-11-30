/* eslint-disable no-unused-vars */
// import { useQuery } from '@tanstack/react-query';
// import usePost from '../../../hooks/usePost';
// import { useState } from 'react';


const Banner = () => {

    
    return (
        <div>
            <div className="hero h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/r29c4HN/bn.jpg)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-white">Forum Community</h1>
                        <p className="mb-5 text-white">Forum for an intellectual journey where thoughts converge and ideas take flight. Explore diverse conversations, forge connections, and be part of a community that values the exchange of knowledge and experiences.</p>
                        <div className=" flex justify-center items-center">
                            <div className="search bar w-4/5 md:2/12 lg:w-7/12 ">
                                <div className="relative flex h-10 w-full min-w-[200px] max-w-[24rem]">
                                    <input
                                        type="text"
                                        name='tag'
                                        className=" h-full w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-white  dark:text-white "
                                        placeholder="Post search by tag"
                                        required
                                    />
                                    <button
                                        className="!absolute right-1 top-1 z-10 select-none rounded bg-blue-400 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
                                        type="submit"
                                        data-ripple-light="true"
                                    >
                                        Search
                                    </button>
                                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">

                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;