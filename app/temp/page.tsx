import RatingGraph from "@/components/cp-components/rating-graph";

export default function Temp(){
    return(
        <div className="w-full min-h-screen p-8 bg-gradient-to-b from-slate-900 to-slate-950">
            <div className="max-w-7xl mx-auto">
                <div className="w-full h-[600px]">
                    <RatingGraph />
                </div>
            </div>
        </div>
    )
}