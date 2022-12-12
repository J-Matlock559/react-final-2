import {useContext} from 'react'
import Pagination from './Pagination'
import { PageContext } from '../App';

function NavPopup({showNav}) {
  const [page, setPage] = useContext(PageContext);

  if (showNav === false){
    return null;
  }


  return (
    <div className='nav-popup glow-border'>
      <div className="button-animation"><Pagination page={page} setPage={setPage} /></div>
      
    </div>
  )
}

export default NavPopup