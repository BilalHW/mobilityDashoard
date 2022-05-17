import React from "react";
import Edit from '../icons/Edit'
import Heart from "../icons/Heart";
import Comment from "../icons/Comment";
import Share from "../icons/Share";
import Saved from '../icons/Saved';
import { signout } from "../api/user.api";
import { getarticles } from "../data/respone";
import { useNavigate } from "react-router-dom";
import { getInvoices } from "../data/articles";
const Dashboard = () => {
    let navigate = useNavigate();
    let articles=  getarticles();
    let fakeData = getInvoices();
    console.log(articles)
    const handleout= async()=>{
        try{
            signout()
            navigate('/')
        }catch(e){
            console.log(e)
        }
    }
  return (
    <>
      <div className="w-full  flex flex-col  bg-slate-200">
        <div className="z-50 fixed w-full h-18 shadow-lg flex justify-between items-center bg-purple px-20 py-6 font-extrabold rounded-sm">
          <div className="max-w-7xl mx-auto ">
            <h1 className="text-4xl font-extrabold font-serif text-center text-white">
              Mobility Dashboard
            </h1>
          </div>
          <div className="flex flex-row ">
            <div className="flex flex-row items-center text-white font-extrabold">
              <button label="Logout" className=" border-1 text-2xl" onClick={()=>handleout()}>
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className=" mt-10 p-10 h-fit justify-items-center grid">
          {fakeData&&fakeData.map((e) => (

            <div className=" w-3/4 h-fit relative m-4 p-10 rounded-lg shadow-xl items-start justify-between bg-white">
              <div className="justify-center align-middle">
                <div className="text-4xl text-green-600 font-bold"></div>
                <div className="flex flex-col mt-2 ">
                  <h1 className="mx-1 text-dark font-extrabold font-serif text-2xl">
                    {e.headline.main}
                  </h1>
                  <h4 className="ml-3 opacity-50 font-serif">
                    Published on {' '}{e.pub_date.split("T")[0]}
                  </h4>
                </div>
                <div className="flex mt-4 text-green font-bold">
                  <div
                    className="border-green mx-1 px-2 rounded-md "
                    style={{
                      borderWidth: 1,
                    }}
                  >
                    {e.section_name}
                  </div>
                  <div
                    className="border-green  mx-1 px-2 rounded-md "
                    style={{
                      borderWidth: 1,
                    }}
                  >
                    {e.document_type}
                  </div>
                  {e.type_of_material != null ? (
                    <div
                      className="border-green  mx-1 px-2 rounded-md "
                      style={{
                        borderWidth: 1,
                      }}
                    >
                      {e.type_of_material}
                    </div>
                  ) : (
                    <div>{""}</div>
                  )}
                  <div
                    className="border-green  mx-1 px-2 rounded-md "
                    style={{
                      borderWidth: 1,
                    }}
                  >
                    {e.document_type}
                  </div>
                </div>
                <div className={"mt-4 p-2  text-left"}>
                  <h3 className="mx-1 font-bold font-serif text-xl">
                    Abstract:
                  </h3>
                  <h4 className="mx-1 ml-3 font-semibold font-serif text-l">
                    {e.abstract}
                  </h4>
                </div>
                <div className="mx-1 px-1 rounded-md text-xl text-purple opacity-70 font-semibold ">
                  <Edit />{e.byline.original}
                </div>
                <div className={"mt-4 p-2  text-left text-sm font-extralight "}>
                  <p>{e.lead_paragraph}</p>
                </div>
                <div className="flex flex-row w-full opacity-50 mt-2 justify-between">
                  <span className="hover:text-purple ">{e.source}</span>
                  <div className="ml-4 flex flex-col justify-items-end">
                    <div className="hover:text-purple cursor-pointer text-dark ">
                      <div className={"text-xs font-extrabold opacity-50"}>
                        words:{e.word_count}
                      </div>
                      <a href={e.web_url} className="text-xs opacity-70">
                        <p>Click to view the complete article</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between items-center mt-7 bg- text-sm font-light">
                  <div className="flex flex-row ">
                    <Heart className="mx-1 hover:bg-rose-700 rounded-lg" />
                    <div className="mr-2">Like</div>
                    <Comment className="mx-1" />
                    <div className=" mr-2">Comment</div>
                    <Share className="mx-1" />
                    <div className=" mr-2">Share</div>
                    <Saved className="mx-1" />
                    <div className=" mr-2">Save</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Dashboard;
