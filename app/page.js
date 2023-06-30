import '@/app/globals.css';

const CAPTAINS_URL = 'https://sheets.googleapis.com/v4/spreadsheets/1GEP9S0xt1JBPLs3m0DoEOaQdwxwD8CEPFOXyxlxIKkg/values/Captains?key=AIzaSyBEjIsljyD9p_moz9SBipM-hH-X_krQUpA'

async function getCaptainsData() {
  const res = await fetch(CAPTAINS_URL, { cache: 'no-store'});
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch captainsData');
  }

  return res.json();
}

function getCaptains(values) {
  let captains = [];
  let captainsArray = values;
  captainsArray.shift();
  captainsArray.forEach(createCaptainsObject);

  function createCaptainsObject(item) {
    let captainsObject = { ghinNumber: item[0], lastName: item[1] };
    captains.push(captainsObject);
  }

  return captains;
}

export default async function RootPage() {
  const captainsData = await getCaptainsData();
  const captains = getCaptains(captainsData.values);


  return (
    <table>
      <tbody>
      {captains.map((captain, index) => (<tr key={index}><td>{captain.ghinNumber}</td><td>{captain.lastName}</td></tr>))}
      </tbody>
    </table>);
}
