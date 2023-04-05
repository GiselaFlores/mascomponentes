function AccesoAutorizado(props) {
  return <h1>Bienvenido!</h1>;
}

function AccesoNoAutorizado(props) {
  return <h1>Acceso no autorizado!!</h1>;
}

export default function Acceder(props) {
  const tieneAcceso = props.tieneAcceso;
  if (tieneAcceso) {
    return <AccesoAutorizado />;
  }
  return <AccesoNoAutorizado />;
}

