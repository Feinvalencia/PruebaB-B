import styled from 'styled-components'

const Imagen = styled.div`
display:flex;
justify-content: space-around;
cursor: pointer;
margin-bottom: 3rem;
.card {
  width: 330px;  
  margin: 10px;
  background-color: white;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);

  &:hover {
    .card__caption {
      top: 50%;
      transform: translateY(-50%);
    }

    .card__image {
      transform: translateY(-10px);
    }

    .card__thumb::after {
      top: 0;
    }

    .card__snippet {
      margin: 20px 0;
    }
  }
}

.card__thumb {
  position: relative;
  max-height: 300px;
  overflow: hidden;
  margin:0px;
  border-radius: 3px;

  &::after {
    position: absolute;
    top: 0;
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 40%, rgba(255, 255, 255, 0) 100%);
    transition: 0.3s;
  }
}

@media (min-width: 1024px) {
  .card__thumb::after {
    top: calc(100% - 140px);
  }
}

.card__image {
  transition: 0.5s ease-in-out;
}

.card__caption {
  position: absolute;
  top: 50%;
  z-index: 1;
  padding: 0 20px;
  color: white;
  transform: translateY(-50%);
  text-align: center;
  transition: 0.3s;
}

@media (min-width: 1024px) {
  .card__caption {
    top: calc(100% - 110px);
    transform: unset;
  }
}

.card__title {
  display: -webkit-box;
  max-height: 85px;
  overflow: hidden;
  font-size: 23px;
  line-height: 28px;
  text-shadow: 0px 1px 5px black;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.card__snippet {
  display: -webkit-box;
  max-height: 150px;
  margin: 20px 0;
  overflow: hidden;
  font-size: 16px;
  line-height: 20px;
  text-overflow: ellipsis;
  transition: 0.5s ease-in-out;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}

@media (min-width: 1024px) {
  .card__snippet {
    margin: 60px 0;
  }
}

.card__button {
  display: inline-block;
  padding: 10px 20px;
  color: white;
  border: 1px solid white;
  font-size: 12px;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    color: black;
    background-color: white;
  }
}
`

export default Imagen