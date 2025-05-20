function AddDoctor(){

    return (
        <>
        <div className="bg-gray-100  w-5/7 md:w-4/5 lg:3/5">
        <div className="m-5">
            <h1 className="text-xl font-bold py-5 underline">Add Doctor</h1>
            <div className="bg-white p-10">
                <form action="" className="flex flex-col justify-center" >
                    <div className="sm:grid grid-cols-2 sm:[&>*]:m-5">
                    <div className="flex flex-col mb-4 ">
                    <label htmlFor="Name">Name</label>
                    <input type="text" placeholder="Name" name="name" id="" className="border-1 rounded pl-2 py-1 border-gray-400" />                    
                    </div>
                    <div className="flex flex-col mb-4 ">
                    <label htmlFor="Number">Phone No</label>
                    <input type="Number" placeholder="Phone number" name="Number" id="" className="rounded pl-2 py-1 border-1 border-gray-400" />                    
                    </div>
                    <div className="flex flex-col mb-4">
                    <label htmlFor="Email">Email</label>
                    <input type="email" placeholder="Email" name="email" id="" className="rounded pl-2 py-1 border-1 border-gray-400" />                    
                    </div>
                    <div className="flex flex-col mb-4">
                    <label htmlFor="Education">Education</label>
                    <input type="text" placeholder="Education" name="Education" id="" className="rounded pl-2 py-1 border-1 border-gray-400" />                    
                    </div>
                    <div className="flex flex-col mb-4">
                    <label htmlFor="Password">Doctor Password</label>
                    <input type="text" placeholder="Password" name="password" id="" className="rounded pl-2 py-1 border-1 border-gray-400" />                    
                    </div>
                    <div className="flex flex-col mb-4">
                    <label htmlFor="Address">Address</label>
                    <input type="text" placeholder="Address 1" name="Address" id="" className=" rounded pl-2 py-1 border-1 border-gray-400" />    
                    <input type="text" placeholder="Address 2" name="Address" id="" className="rounded pl-2 py-1 mt-3 border-1 border-gray-400" />                  
                    </div>
                    <div className="flex flex-col mb-4">
                    <label htmlFor="Experiance">Experiance</label>
                                    
                    <select name="Experiance" id="" className="border-1 border-gray-400 rounded pl-2 py-1"  >
                        <option value="Experiance">1 Year</option>
                        <option value="Experiance">2 Years</option>
                        <option value="Experiance">3 Years</option>
                        <option value="Experiance">4 Years</option>
                        <option value="Experiance">above 5 Years</option>
                        <option value="Experiance"> above10 Years</option>
                        <option value="Experiance">above 20 Years</option>
                    </select>
                    </div>
                    <div className="flex flex-col mb-4">
                    <label htmlFor="Fees">Fees</label>
                    <input type="number" placeholder="Fees" name="Fees" id="" className="border-1 border-gray-400 rounded pl-2 py-1" />  
                    </div>
                    <div className="flex flex-col mb-4">
                    <label htmlFor="About">About Doctors</label>
                    <textarea name="About" id="" cols="30" rows="5" className="border-1 border-gray-400 rounded pl-2 py-1"></textarea>
              
                    </div>
                    </div>
                    <button type="submit" className="bg-blue-600 text-xl px-5 py-1 my-8 rounded-full text-white" >Submit</button>




                </form>
            </div>
        </div>
        </div>
        </>
    )
}
export default AddDoctor;