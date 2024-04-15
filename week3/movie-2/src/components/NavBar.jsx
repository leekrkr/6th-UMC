import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='BarContainer'>
      <div className='BarWrap'>
        <div className='BarWrapRight'>
            <Link to='/'>
                <div className='BarTitle'>UMC&nbsp;Movie</div>
            </Link>
            <ul>
                <li>
                    <Link className='BarItemWrap' to='/popular'>
                        Popular
                    </Link>
                </li>
                <li>
                    <Link className='BarItemWrap' to='/nowplaying'>
                        Nowplaying
                    </Link>
                </li>
                <li>
                    <Link className='BarItemWrap' to='/toprated'>
                        Toprated
                    </Link>
                </li>
                <li>
                    <Link className='BarItemWrap' to='/upcoming'>
                        Upcoming
                    </Link>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
}