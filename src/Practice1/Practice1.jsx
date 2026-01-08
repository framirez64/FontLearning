import "./IkeaScheme.css";

function Card({ children }) {
  return <div className="card">{children}</div>;
}

function IkeaScheme() {
  return (
    <div className="page">
      <Card>
        <h2>IKEA Scheme</h2>
        <p>DiddyBlyud</p>
      </Card>
    </div>
  );
}

export default IkeaScheme;
