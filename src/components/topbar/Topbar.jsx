import './topbar.css'
import {Search, Person , Chat, Notifications} from "@mui/icons-material"
export default function Topbar() {
  return (
    <div className="topbarContainer">
       <div className="topbarLeft">
        <span className="logo">GoSocial</span>
       </div>
       <div className="topbarCenter">
        <div className="searchbar">
        <Search className='searchIcon'/>
        <input 
          placeholder='Search for friend, post and vedio' 
          className="searchInput" 
        />
        </div>
       </div>
       <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="tpobarIconItem">
            <Person/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="tpobarIconItem">
            <Chat/>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="tpobarIconItem">
            <Notifications/>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/6.jpeg" alt="" className="topbarImg" />
       </div>
    </div>
  );
};
