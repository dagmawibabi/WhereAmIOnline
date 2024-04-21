export default function WideColumnContainer(props: any) {
    return (
        <div className="pt-8
            lg:pt-14
        ">
            <div className="border border-zinc-800 rounded-2xl group">
                <div className="w-full -mt-7 p-1">
                    <div className="w-fit mx-auto rounded-full bg-[#121212] p-2 border border-transparent group-hover:border group-hover:border-zinc-800">
                        {props.icon}
                    </div>
                </div>
                
                <div className={
                    props.colStyle === true ? 
                        "pb-3 px-2 grid grid-flow-row grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3" 
                    : "pb-3 px-2 grid grid-flow-row grid-cols-2"
                }>
                    {props.links}
                </div>
            </div>
        </div>
    );
}