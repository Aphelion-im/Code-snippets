import { useParams } from "react-router-dom";


export default function Faq() {
  const { id } = useParams();

  return (
    <>
      <h1>Faq</h1>
      <p>
        <strong>useNavigate hook</strong> (onderdeel van react-router-dom) te vinden in het
        project: "React - React Hook Form - Contact Form"
      </p>
      <p>
        <strong>Link</strong> is dus een component dat we gebruiken als hyperlink en useNavigate
        is een hook die we gebruiken binnen onze logica om gebruikers door te
        sturen naar een ander pagina.
      </p>

      <div>Het productnummer is <strong>{id}</strong></div>
    </>
  );
}
