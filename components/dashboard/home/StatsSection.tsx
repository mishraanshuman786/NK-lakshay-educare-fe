import { homepageData } from "@/lib/data/dashboard/home"

const StatsSection = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
   
    {
        homepageData.stats.map((stat,index)=>{
           return (
             <div className={` ${stat.bgColor} ${stat.textColor} p-6 rounded-md`} key={index}>
                <div>
                    <h1 className="font-bold text-2xl">{stat.count}</h1>
                    <h4 className="font-bold text-md">{stat.title}</h4>
                </div>

            </div>
           )
        })
    }
    </div>
  )
}

export default StatsSection