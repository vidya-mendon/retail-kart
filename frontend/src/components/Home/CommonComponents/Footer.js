import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
    return (
        <footer >
            <Row style={{ 'background-color': '#0000CC', 'padding': '50px' }}>
                <Col style={{ color:'#fff',fontStyle:'italic'}}>
                    <h3>Retailkart</h3>
                    <p>
                We are trying to connect small and large brands to sell their
                quality product to the diffent places.
              </p>
              <Row>
                  <Col>
                    <a href="#" className="twitter"  style={{color:'#fff'}}>
                    <i className="fa fa-twitter"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="#" className="facebook" style={{color:'#fff'}}>
                    <i className="fa fa-facebook"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="#" className="instagram" style={{color:'#fff'}}>
                    <i className="fa fa-instagram"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="#" className="google-plus" style={{color:'#fff'}}>
                        <i className="fa fa-google-plus"></i>
                    </a>
                  </Col>
                  <Col>
                    <a href="#" className="linkedin" style={{color:'#fff'}} >
                        <i className="fa fa-linkedin"></i>
                    </a>
                  </Col>
              
            </Row>
        </Col>
                <Col style={{ color:'#fff' }}>
                 </Col>
                <Col style={{ color:'#fff',fontStyle:'italic'}}>
                <h4>Useful Links</h4>
                    <ul><li><a href="/" style={{ color:'#fff' }}>Home</a></li>
                        <li><a href="/about" style={{ color:'#fff' }}>About us</a></li>
                        <li><a href="/contact" style={{ color:'#fff' }}>Contact us</a></li>
                        <li><a href="/services" style={{ color:'#fff' }}>Service</a></li>
                    </ul>
                </Col>
            </Row>
        </footer >
    )
}

export default Footer
