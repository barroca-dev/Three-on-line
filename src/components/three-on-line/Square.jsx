export const Square = ({ index, updateBoard, isSelected, children }) => {
    const className = `square ${isSelected ? "is-selected" : ""}`;
  
    const handleClick = () => {
      updateBoard(index);
    };
  
    return (
      <div className={className} onClick={handleClick}>
        {children}
      </div>
    );
  };