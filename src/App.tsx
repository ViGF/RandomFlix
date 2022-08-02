import { useState } from "react";
import { Logo } from "./assets/Logo";
import { Title } from "./components/Title/Title";
import { LoadingOutlined, QuestionCircleFilled } from "@ant-design/icons";

import './styles/App.css'
import { Informations } from "./types/informations";
import { TitleSkeleton } from "./components/TitleEsqueleton/TitleSkeleton";
import { InformationsDialog } from "./components/InformationsDialog/InformationsDialog";

type movieResponse = {
  items: [
    Informations
  ]
}

export function App() {
  const [movie, setMovie] = useState<Informations>()
  const [loading, setLoading] = useState<boolean>(false)
  const [show, setShow] = useState<boolean>(false)

  function renderIndexList() {
    return Number(Math.floor((Math.random() * 200)).toFixed(0))
  }

  function getMovieInformations(res: movieResponse) {
    const moviedIndex = renderIndexList()
    const movieId = res.items[moviedIndex].id


    fetch(`https://imdb-api.com/pt-BR/API/Title/${import.meta.env.VITE_API_KEY}/${movieId}`)
      .then(response => response.json())
      .then(res => {
        if (res.errorMessage.split().length > 0) {
          alert(res.errorMessage)
        }
        setMovie(res)
      })
      .finally(() => setLoading(false))
  }

  function getMovie() {
    setLoading(true)
    setMovie(undefined)

    fetch(`https://imdb-api.com/pt-BR/API/BoxOfficeAllTime/${import.meta.env.VITE_API_KEY}`)
      .then(reponse => reponse.json())
      .then(res => {
        if (res.errorMessage.split().length > 0) {
          alert(res.errorMessage)
        }
        getMovieInformations(res)
      })
      .finally(() => setLoading(false))
  }

  function handleShowDialog() {
    setShow(true)
  }

  function handleCloseDialog() {
    setShow(false)
  }

  return (
    <header className="header">
      <QuestionCircleFilled onClick={() => handleShowDialog()} className="dialog-button" />

      <InformationsDialog onClose={handleCloseDialog} open={show} />
      
      <div className="title">
        <Logo width={88} height={63} />
        <h1>Não sabe o que assistir?</h1>
      </div>
      {movie ? <Title title={movie} /> : ''}
      {loading ? <TitleSkeleton /> : ''}
      {
        loading ?
          <LoadingOutlined className="loading" />
          :
          <button type="button" onClick={() => getMovie()}>
            <Logo height={26} width={36} />
            Encontrar filme
          </button>
      }
      <p className="about">
        Clique em "Encontrar filme" que traremos informações
        de algum filme para você assistir hoje.
      </p>
    </header>
  )
}
