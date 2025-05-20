import dashboard from './images/dashboard.png'
import doctor from './images/doctor.png'
import doctorlist from './images/doctorlist.png'
import appointment from './images/appointment.png'

function Aside(){
    let deshbord_aside_list=[{Title:"Dashboard",Logo:dashboard,Link:"index.html"},{Title:"Appoinments",Logo:appointment},{Title:"Add Doctor",Logo:doctor,Link:"adddoctor.html"},{Title:"Doctors List",Logo:doctorlist}]
   
    return(
        <>
        
        <div className=" h-[80vh] w-2/7 lg:w-2/8  xl:w-1/7">
        
            {deshbord_aside_list.map((object1) => (
                
                 <div className="  border-r-5 border-blue-500 bg-gray-200 md:text-xl py-2 sm:py-3 mt-1.5 sm:mt-3 ">
                 <a href={object1.Link} className="flex justify-start items-center">
            <img className="pr-3 md:size-10 sm:size-8 size-7 ml-2 sm:ml-2" src={object1.Logo} alt="im" />
            <p className="">{object1.Title}</p>
            </a>
        </div>
        
             ))}
            
            
        </div>
        
        
        
        </>
    )
}
export default Aside;