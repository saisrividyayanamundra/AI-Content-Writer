import "./Navbar.css";

export default function SideNavbar({ open, setOpen }) {

  return (
    <>
      {/* Hamburger button */}
      <div className="hamburger-btn" onClick={() => setOpen(!open)}>
        ☰
      </div>
      <div className="login-btn">
        <a href="#">Login</a>
      </div>

      {/* Sidebar */}
      <aside className={`sidebar ${open ? "open" : ""}`}> 
            <div className="hill hill-1"></div>
            <div className="hill hill-2"></div>
            <div className="hill hill-3"></div>
            <div className="hill hill-3"></div>
            <div className="hill hill-4"></div>
            <div className="hill hill-5"></div>
            <div className="hill hill-6"></div>



        <nav className="sidebar-links">
          <a href="#">New Chat</a>
          <a href="#">My Chats</a>        
        </nav>
       
      </aside>

    </>
  );
}
