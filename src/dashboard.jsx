
import doctor from './images/doctor.png'
import patients from './images/patients.png'
import appointment from './images/appointment.png'
import Aside from './aside';
function Dashboard(){


     let deshbord_data=[{Name:"Doctors",Total:2,Icon:doctor,},{Name:"Appointments",Total:14,Icon:appointment,},{Name:"Patients",Total:5,Icon:patients,}];
    let latest_appointment=[{Image:patients,Name:"Imran Ali",Date:"10 May 2025 | 12:30 AM" , Status:"Approved"},
        {Image:patients,Name:"Rana Mondal",Date:"10 May 2025 | 12:28 AM" , Status:"Cancelled"}, 
        {Image:patients,Name:"Rahat Mondal",Date:"10 May 2025 | 12:30 AM" , Status:"Approved"},
         {Image:patients,Name:"Afridi Rohman",Date:"10 May 2025 | 12:30 AM" , Status:"Approved"},
        ]

    return (
        <>
        <div className="flex">
            <Aside></Aside>
        <div className="bg-gray-100  w-5/7 md:w-3/5">
        <div className="flex flex-wrap">
            {deshbord_data.map((key)=>(
                <div className="sm:p-4 p-2 bg-white flex justify-around items-center my-3 mx-5 rounded-2xl min-w-[130px] sm:min-w-[220px]">
                <img src={key.Icon} alt="" className="sm:size-16 size-8" />
                <div className=" text-center">
                    <h1 className="sm:text-4xl text-green-700  ">{key.Total}</h1>
                    <p className="text-gray-500 sm:text-sm text-xs">{key.Name}</p>
                </div>
            </div>
            ))}
            
        </div>
        <div className="bg-white  mx-5 my-6 border-1 border-gray-400">
            <div className="bg-gray-100 flex justify-start items-center py-2 border-b-1 border-gray-400">
                <img src={appointment} alt=""  className="size-8 mx-3"/>
                <h1 className="text-xl">Leatest Appointment</h1>
            </div>
            <div className="mb-3">
                {latest_appointment.map((item)=>(
                    
                    <div className="mt-4 rounded-3xl bg-amber-100 px-2 py-2 sm:px-4 sm:mx-2 sm:rounded-2xl flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={item.Image} alt="" className="size-8 mr-2 sm:size-12 sm:mr-3"/>
                        <div>
                            <h1 className="sm:text-xl">{item.Name}</h1>
                            <p className="text-xs text-gray-600">{item.Date}</p>
                        </div>
                    </div>
                    <h1 className="text-sm sm:text-xl px-2 py-1 rounded-2xl border-1 border-green-600 text-green-600 ">{item.Status}</h1>
                </div>
                ))}
                

            </div>
        </div>
        </div>
        </div>
        </>
    )
}
export default Dashboard;