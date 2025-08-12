import SidebarLeft from "../Sidebar/SidebarLeft.jsx";
import SidebarRight from "../Sidebar/SidebarRight.jsx";

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <SidebarLeft />
            <SidebarRight />
        </aside>
    );
}
