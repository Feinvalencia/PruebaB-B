import Imagen from '../components/Imagen'


const SectionImg = () =>{

    return(
        <Imagen>
            <div className="card">
                <figure className="card__thumb">
                    <img src="./images/Put.jpg" alt="Put something here" className="card__image"/>
                    <figcaption className="card__caption">
                        <h2 className="card__title">Put something here</h2>
                        <p className="card__snippet"><h4>Maybe here as well i think</h4>Phasellus queam turpis, feugiat sit amet in, hendrerit in lectus, present send semper amet bibendum tristique fringilla</p>
                    </figcaption>
                </figure>
            </div>

            <div className="card">
                <figure className="card__thumb">
                    <img src="./images/An.jpg" alt="An Interesting title" className="card__image"/>
                    <figcaption className="card__caption">
                        <h2 className="card__title">An Interesting title</h2>
                        <p className="card__snippet"><h4>This is also an interesting subtitle</h4>Phasellus queam turpis, feugiat sit amet in, hendrerit in lectus, present send semper amet bibendum tristique fringilla</p>
                    </figcaption>
                </figure>
            </div>

            <div className="card">
                <figure className="card__thumb">
                    <img src="./images/Oh.jpg" alt="Oh, and finally ..." className="card__image"/>
                    <figcaption className="card__caption">
                        <h2 className="card__title">Oh, and finally ...</h2>
                        <p className="card__snippet"><h4>Here´s another intriguing subtitle</h4>Phasellus queam turpis, feugiat sit amet in, hendrerit in lectus, present send semper amet bibendum tristique fringilla</p>
                    </figcaption>
                </figure>
            </div>

        </Imagen>
    )
}

export default SectionImg