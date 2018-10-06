import React, { Component } from "react";
import Slider from "react-slick";
import './index.css'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      className: this.props.sliderClassName,
      centerMode: false,
      centerPadding: '70px',
      focusOnSelect: true,
      arrows: false,
      dots: false,
      infinite: false,
      speed: 1000,
      slidesToShow: this.props.slidesToShow,
      slidesToScroll: this.props.slidesToScroll
    };


    if (this.props.name == 'Articles') {
      return (
        <div className="containerPadding">
          <Slider {...settings}>

            <div className="slider0">
              <div className="articlesContainer">
                <img src="palme-mordplatsen.jpg"></img>
                <p>Mordplatsen & vittnesmål</p>
              </div>
            </div>

            <div className="slider0">
              <div className="articlesContainer">
                <img src="thomasPettersson.jpg"></img>
                <p>Intervju med Thomas Pettersson</p>
                </div>
            </div>

            <div className="slider0">
              <div className="articlesContainer">
                <img src="polisens-misslyckande.jpg"></img>
                <p>Polisens misslyckande</p>
              </div>
            </div>

          </Slider>
        </div>
      );
    }

    if (this.props.name == 'Infographic') {
      return (
        <div className="containerPadding">
          <Slider {...settings}>
            <div>
            <div className="slider1">
            <h2>Preskriberingstid</h2>
            <div className="dataDescription">
            <p>Efter tolv års efterforskningar om denna gåtfulla person fann journalisten Thomas Pettersson vad andra tidigare gått bet på.</p>
            </div>
            <div className="dataContainer">
            <h3 className="dataHeading">Innan 2010</h3>
            <div className="dataRow1">
            <p>25 år</p>
            </div>
            </div>
            <div className="dataContainer">
            <h3 className="dataHeading">Efter 2010</h3>
            <div className="dataRow2">
            <p>40 år</p>
            </div>
            </div>
            <div className="dataContainer">
            <h3 className="dataHeading">Palmemordet</h3>
            <div className="dataRow3">
            <p>32 år</p>
            </div>
            </div>
            </div>
            </div>
            <div>
            <div className="slider1">
            <h2>Preskriberingstid</h2>
            <div className="dataDescription">
            <p>Efter tolv års efterforskningar om denna gåtfulla person fann journalisten Thomas Pettersson vad andra tidigare gått bet på.</p>
            </div>
            <div className="dataContainer">
            <h3 className="dataHeading">Innan 2010</h3>
            <div className="dataRow1">
            <p>25 år</p>
            </div>
            </div>
            <div className="dataContainer">
            <h3 className="dataHeading">Efter 2010</h3>
            <div className="dataRow2">
            <p>40 år</p>
            </div>
            </div>
            <div className="dataContainer">
            <h3 className="dataHeading">Palmemordet</h3>
            <div className="dataRow3">
            <p>32 år</p>
            </div>
            </div>
            </div>
            </div>
          </Slider>
        </div>
      );
    }



    if (this.props.name == 'Discussed') {
      return (
        <div className="containerPadding">
          <Slider {...settings}>
            <div>
              <div className="slider2">
                <div className="discussionContainer">
                  <img src="SVDBLlogga.svg"></img>
                  <p>”Mattias Göransson säger att de haft ett unikt
                  kontaktnät till sitt förfogande och att det är
                  Filters historiskt största reportage med över
                  112 000-tecken. På nätet ligger det flera noter
                  som är kopplade till flera sidor källdokument som
                  man själv kan gå in att läsa.”</p>
                </div>
              </div>
            </div>

            <div>
              <div className="slider2">
                <div className="discussionContainer">
                  <img src="FILTERlogga.png"></img>
                  <p>”Mattias Göransson säger att de haft ett unikt
                  kontaktnät till sitt förfogande och att det är
                  Filters historiskt största reportage med över
                  112 000-tecken. På nätet ligger det flera noter
                  som är kopplade till flera sidor källdokument som
                  man själv kan gå in att läsa.”</p>
                </div>
              </div>
            </div>

            <div>
              <div className="slider2">
                <div className="discussionContainer">
                  <img src="DNlogga.jpg"></img>
                  <p>”Mattias Göransson säger att de haft ett unikt
                  kontaktnät till sitt förfogande och att det är
                  Filters historiskt största reportage med över
                  112 000-tecken. På nätet ligger det flera noter
                  som är kopplade till flera sidor källdokument som
                  man själv kan gå in att läsa.”</p>
                </div>
              </div>
            </div>


          </Slider>
        </div>
      );
    }



  }
}
