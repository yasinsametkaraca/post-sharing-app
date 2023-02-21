import React, {useState} from 'react';
import {useDispatch} from "react-redux";

const Modal = () => {
    const [postData, setPostData] = useState({user:"",title:"",description:""});
    const dispatch = useDispatch();

    const onChangeFunction = (e) => {
        setPostData({...postData,[e.target.name]:e.target.value});
    }

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none}"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div

                        className="md:min-w-[500px] border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div
                            className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Share Post
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => dispatch({type:"MODAL",payload:false})}
                            >
            <span
                className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
              ×
            </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="flex flex-col my-4 space-y-3 m-2">
                            <input value={postData.user} name={"user"} onChange={onChangeFunction} type="text" placeholder={"User"} className={"input-style"}/>
                            <input value={postData.title} name={"title"} onChange={onChangeFunction} type="text" placeholder={"Title"} className={"input-style"}/>
                            <input value={postData.description} name={"description"} onChange={onChangeFunction} type="text" placeholder={"Description"} className={"input-style"}/>
                        </div>
                        {/*footer*/}
                        <div
                            className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => dispatch({type:"MODAL",payload:false})}
                            >
                                Close
                            </button>
                            <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                    dispatch({type:"MODAL",payload:false});

                                }}
                            >
                                Share
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
};

export default Modal;
