
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import pdf from "../../Assets/../Assets/Abdekrahman-Mohamed-Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";




function ResumeNew() {

  return (
    <div>
      <Container fluid className="resume-section vh-100">
        
      

        <Row className="resume  my-5 ">
          <div  className="d-flex justify-content-center ">
            <h3>MyResume</h3>
            
          </div>
        </Row> 

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
