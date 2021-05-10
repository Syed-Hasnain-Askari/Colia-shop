import React from "react";
import Accordion from "./Accordion";
import MapChart from "./MapChart";
import "./contact.css";
class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }
  render() {
    return (
          <div className="contact__wrapper">
          <div className="container">
                <div className="row d-flex justify-content-center">
                    <h1 className="text-center">Nos horaires d'ouvertures</h1>
                    <div className="col-xl-6 col-lg-6 col-sm-12">
                    <Accordion
                    className="accordion"
                    selectedIndex={this.state.selectedIndex}
                    onChange={(index, expanded, selectedIndex) => console.log(`#${index} ${expanded ? 'expanded' : 'collapsed'} (selectedIndex: ${selectedIndex})`)}
                      >
          <div data-header="Geneve" className="accordion-item">
            <p>
              <img
                src="http://www.emilpalsson.com/react-tiny-accordion-demo1.jpg"
                alt="Demo"
              />
              Quisque molestie luctus erat a sagittis. Praesent blandit, arcu
              sed dictum ornare, metus lorem faucibus enim, sit amet molestie
              sem augue eget metus. Aliquam varius justo neque, iaculis dapibus
              enim faucibus in. Maecenas tempus auctor neque vitae viverra. Cras
              vel pellentesque nibh. Fusce lacinia nisi quis dolor hendrerit
              malesuada a quis purus. Integer efficitur mi dignissim dui aliquam
              ultricies. Etiam facilisis ullamcorper erat. Nunc leo elit,
              dapibus quis lorem non, aliquet fermentum tellus.
            </p>
          </div>
          <div
            data-header="Btw, this guy has a nested accordion"
            className="accordion-item"
          >
            <p>
              Etiam ultricies dignissim fermentum. Orci varius natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus. Vivamus a
              elit convallis, feugiat metus eget, tristique tellus.
            </p>
            <Accordion className="accordion">
              <div data-header="Well" className="accordion-item">
                Mauris nec scelerisque ligula. Sed aliquam blandit metus, sed
                semper lectus placerat nec. Nam lobortis faucibus sem at
                rhoncus. Mauris id pellentesque ex. Praesent ornare nunc at
                ultricies bibendum. Maecenas nec ultricies libero. Aenean ac
                hendrerit massa. Class aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos. Vivamus non erat
                bibendum leo ultrices bibendum vitae non risus.
              </div>
              <img
              data-header="Your accordion can contain any component really"
              className="accordion-item"
              src="http://www.emilpalsson.com/react-tiny-accordion-demo2.jpg"
              alt="Demo"
              >  
              </img>
            </Accordion>
          </div>
        </Accordion>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-sm-12 mt-lg-5">
                        <MapChart/>
                    </div>
                </div>
          </div>
      </div>
    );
  }
}
export default ContactPage
