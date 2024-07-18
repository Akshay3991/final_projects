
const Home = () => {
    return (
        <>
            <div className="img-home w-[100vw] h-[70vh] bg-no-repeat">
                <div className="absolute right-0 pt-[100px] pr-[100px]  h-[50%] w-[40%]">
                    {/* introduction */}
                    <h1 className="font-black text-[27px]">Trust Me! I will fix & complete your documentation</h1>
                    <p className="font-mono" >
                        Here is one solution plateform for your all documentaion work like Aadhar Correction , Schollership , Banking , Passpord size photo , Online Forms , Gove. Schemes , Printing and lemination
                        <br />
                        <button className='bg-[#CF0036] mt-[20px] p-[10px] font-black rounded-[10px]'>Appointment</button>
                    </p>
                </div>
            </div>
            {/* services */}
            <div className="bg-[#FFD565]  w-[100vw] h-[80vh]">
                <h1 className="font-black text-[27px] underline font-serif text-center uppercase">Services</h1>
                <hr />
                <div className="flex flex-wrap p-[20px_0px] justify-evenly w-[100%] h-[100%]">
                    <div className=" w-[30%] h-[35%] rounded-[25px] shadow-lg shadow-black bg-[whitesmoke]">
                        <h1 className="uppercase font-bold font-mono">Adhar correction</h1>
                    </div>
                    <div className=" w-[30%] h-[35%] rounded-[25px] shadow-lg shadow-black bg-[whitesmoke]">
                        <h1 className="uppercase font-bold font-mono">Scholarships</h1>
                    </div>
                    <div className=" w-[30%] h-[35%] rounded-[25px] shadow-lg shadow-black bg-[whitesmoke]">
                        <h1 className="uppercase font-bold font-mono">State Govt. Schemes</h1>
                    </div>
                    <div className=" w-[30%] h-[35%] rounded-[25px] shadow-lg shadow-black bg-[whitesmoke]">
                        <h1 className="uppercase font-bold font-mono">Central Govt. Schemes</h1>
                    </div>
                    <div className=" w-[30%] h-[35%] rounded-[25px] shadow-lg shadow-black bg-[whitesmoke]">
                        <h1 className="uppercase font-bold font-mono">Pan card</h1>
                    </div>
                    <div className=" w-[30%] h-[35%] rounded-[25px] shadow-lg shadow-black bg-[whitesmoke]">
                        <h1 className="uppercase font-bold font-mono">Photocopy&lamination</h1>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Home