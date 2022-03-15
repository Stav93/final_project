import  {useState, useEffect} from 'react'
import Park from "../Park/Park.js"

function ParksList() {
  const [parks, setParks] = useState([]);

  useEffect(() => {
    fetch('/api/parks')
      .then(response => response.json())
      .then(data => setParks(data));
  }, []);


  return (
    <div>
      {parks
        .map(park => {
        return (
          <Park key={park.id} park={park} />
        );
      })}
    </div>
  )
}

export default ParksList