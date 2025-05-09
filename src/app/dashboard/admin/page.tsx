import UserCard from "@/components/UserCard"

const AdminPage = () => {
    return (
        <div className='p-4 flex flex-col md:flex-row'>
            {/* LEFT */}
            <div className="w-full lg:w-2/3">
            {/* USER CARDS */}
            <div className="">
                <UserCard type={""}/>
            </div>
            </div>
            {/* RIGHT */}
            <div className="w-full lg:w-1/3">r</div>
        </div>
    )
}

export default AdminPage