function Nav(){


    return(
        <>
        <nav className="flex justify-between px-5 py-3  bg-gray-100 border-b-2 border-blue-500 ">
            <div class="flex items-center">
                <h1 className="text-blue-500 text-2xl font-bold">BDoctor</h1>
                <h1 className="ml-4 text-yellow-500 text-l border-1 px-2 rounded-xl h-[80%]">Admin</h1>
            </div>
            <button className="text-xl text-white px-4  rounded-2xl  bg-blue-500 flex py-1 items-center justify-center">Logout</button>
        </nav>
        </>
    )

}
export default Nav;