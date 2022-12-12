import { useRef, useState } from "react";

function Pagination({page, setPage}) {

  // const [active, setActive] = useState(1);
  const [btn1, setBtn1] = useState('active-button');
  const [btn2, setBtn2] = useState('');
  const [btn3, setBtn3] = useState('');
  const [btn4, setBtn4] = useState('');
  
  const but1 = useRef();
  const but2 = useRef();
  const but3 = useRef();
  const but4 = useRef();
  

  const handlePageClick = (e) => {
    // but1.current.classList.remove('active-button');
    // but2.current.classList.remove('active-button');
    // but3.current.classList.remove('active-button');
    // but4.current.classList.remove('active-button');
    // if(e === 1) {active = but1};
    // if(e === 2) {active = but2};
    // if(e === 3) {active = but3};
    // if(e === 4) {active = but4};
    setPage(e);
    window.scrollTo(0, 0);
    // active.current.classList.add('active-button');
  };  

  return (
    <>
      <div className="nav-button datapad-button glow-border" onClick={()=>{page > 1 ? handlePageClick(page - 1) : setPage(1)}}>&lt;</div>
        <div ref={but1} className={page === 1 ? "nav-button datapad-button glow-border active-button" : "nav-button datapad-button glow-border"} onClick={()=>{handlePageClick(1)}}>1</div>
        <div ref={but2} className={page === 2 ? "nav-button datapad-button glow-border active-button" : "nav-button datapad-button glow-border"} onClick={()=>{handlePageClick(2)}}>2</div>
        <div ref={but3} className={page === 3 ? "nav-button datapad-button glow-border active-button" : "nav-button datapad-button glow-border"} onClick={()=>{handlePageClick(3)}}>3</div>
        <div ref={but4} className={page === 4 ? "nav-button datapad-button glow-border active-button" : "nav-button datapad-button glow-border"} onClick={()=>{handlePageClick(4)}}>4</div>
        <div className="nav-button datapad-button glow-border" onClick={()=>{page < 4 ? handlePageClick(page + 1) : setPage(4)}}>&gt;</div>
    </>
  )
}

export default Pagination