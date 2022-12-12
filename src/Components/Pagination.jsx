
function Pagination({page, setPage}) {

  const handlePageClick = (e) => {
    setPage(e);
    window.scrollTo(0, 0);
  };  

  return (
    <>
      <div className="nav-button datapad-button glow-border" onClick={()=>{page > 1 ? handlePageClick(page - 1) : setPage(1)}}>&lt;</div>

        <div className={page === 1 ? "nav-button datapad-button glow-border active-button" : "nav-button datapad-button glow-border"} onClick={()=>{handlePageClick(1)}}>1</div>

        <div className={page === 2 ? "nav-button datapad-button glow-border active-button" : "nav-button datapad-button glow-border"} onClick={()=>{handlePageClick(2)}}>2</div>

        <div className={page === 3 ? "nav-button datapad-button glow-border active-button" : "nav-button datapad-button glow-border"} onClick={()=>{handlePageClick(3)}}>3</div>

        <div className={page === 4 ? "nav-button datapad-button glow-border active-button" : "nav-button datapad-button glow-border"} onClick={()=>{handlePageClick(4)}}>4</div>

        <div className="nav-button datapad-button glow-border" onClick={()=>{page < 4 ? handlePageClick(page + 1) : setPage(4)}}>&gt;</div>
    </>
  )
}

export default Pagination