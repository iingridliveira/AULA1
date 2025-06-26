import { useState } from 'react'





function Contador() {
  const [countLike, setCountLike] = useState(0)

  return (
    <>
   
      <h1>Contador de Likes</h1>
      <p>Contador de Likes: {countLike}</p>
      <button onClick={() => setCountLike((count) => count + 1)}>
        butão like 
      </button>
      <button onClick={() => setCountLike((count) => count - 1)}>
        butão deslik 
      </button>
    </>
  );
}

export default Contador
