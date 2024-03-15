import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <h1>Oops...pagina niet gevonden</h1>
      Neem me terug naar de <Link to="/">Homepage</Link>
    </>
  );
}
