const Main = ()=>{
    return(
        <div className="flex items-center justify-between">
            <div className="flex flex-col gap-16">
                <h1 className="text-white text-4xl">
                    A <span className="font-bold">tranquilidade</span> que <br /> você merece <br />
                    a contabilidade que você <br /> <span className="font-bold">confia</span>.
                </h1>
                <button className="w-auto bg-yellow-400 p-2 px-16 text-center rounded-xl hover:bg-yellow-300 transition-colors">Decolar!</button>
            </div>
            <div className="">
                <img className="" src="/sphere.svg" alt="esfera abstrata" />
            </div>
            <div className="bg-yellow-300 rounded-full w-[500px] h-[500px] blur-[200px] absolute -right-80"></div>
        </div>
    )
}

export default Main