import { Container } from "reactstrap";
import "../style/common-section.css";

const CommonSection = (props) => {
  return (
    <section className="common_section">
      <Container>
        <h2 className="text-white">{props.title}</h2>
      </Container>
    </section>
  )
}

export default CommonSection;