import "../../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>{new Date().getFullYear()}</p>
    </div>
  );
}

export default Footer;
