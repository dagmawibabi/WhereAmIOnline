export default function LinkGroup(props: any, colStyle: boolean) {
    return (
        <div className="pt-8
            lg:pt-14
        ">
            <div className="border border-zinc-800 rounded-2xl">
                <div className="w-full -mt-7 p-2">
                    {props.icon}
                </div>
                
                <div className={
                    colStyle == true ? 
                        "pb-3 px-2 grid grid-flow-row grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3" 
                    : "pb-3 px-2 grid "
                }>
                    {props.links}
                </div>
            </div>
        </div>
    );
}