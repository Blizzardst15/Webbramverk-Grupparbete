import { useEffect, useState } from "react";

function Skolor() {
  const [skolor, setSkolor] = useState (null)

  useEffect(() => {
    fetch('http://localhost:8000/api/skolor')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setSkolor(data);
      })
  }, [])

  return (
    <div className="home"> OK
    {/*   {skolor && <BlogList blogs={blogs} />} */}
    </div>
  );  
}

export default Skolor
