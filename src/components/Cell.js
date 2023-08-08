const Cell = ({ id, cell, setCells, go, setGo,cells ,}) => {
    const handleClick = (e) => {
        const taken =
            e.target.firstChild.classList.contains("circle") ||
            e.target.firstChild.classList.contains("cross");

        if (!taken) {
            if (go === "circle") {
                e.target.firstChild.classList.add("circle");
                handelCellChange("circle")
                setGo("cross");
            } else {
                e.target.firstChild.classList.add("cross");
                handelCellChange("cross")
                setGo("circle");
            }
        }
    };

    const handelCellChange=(className)=>{
        const NextCells=cells.map((cell, index)=>{
            if(index===id){
                return className
            }
            else{
                return cell
            }


        })
        setCells(NextCells)

    }

    return (
        <div className="square" id={id} onClick={handleClick}>
            <div className={cell}></div>
        </div>
    );
};


export default Cell;
