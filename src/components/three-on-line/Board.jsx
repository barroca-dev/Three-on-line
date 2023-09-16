import { Square } from './Square.jsx'

 function Board({ board, updateBoard }) {
    return (
    
        board.map((contenido, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {contenido}
            </Square>
          );
        })
    )      
}

export default Board