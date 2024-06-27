import Image from "next/image"
import Head from "./common/header"

export default function Home() {
  return (
    <>
      <Head></Head>
      <div className="hero" style={{ backgroundImage: "url('images/hero_1.jpg')" }}>
        <div className="flex-container" style={{ paddingTop: "10vw", paddingLeft: "11vw" }}>
          <div className="" style={{ backgroundImage: "url('images/blocconotes.png')", backgroundPosition: "left", backgroundSize: "contain", height: "40vw", backgroundRepeat: "no-repeat", paddingTop: "6vw", paddingLeft: "2vw" }}>
            <ul style={{ listStyleType: "none", fontSize: "1vw" }}>
              <li className="listed-content"><a href="/415bis">415BIS</a></li>
              <li className="listed-content"><a href="/sanzioniSostitutive">Sanzioni sostitutive pene brevi</a></li>
              <li className="listed-content"><a href="/misureAlternative">Misure alternative alla detenzione</a></li>
              <li className="listed-content"><a href="/conversionePeneDetentive">Conversione in Pene Pecuniarie</a></li>
              <li className="listed-content"><a href="/appello">Appello</a></li>
              <li className="listed-content">Opposizione Decreto Penale di Condanna</li>
              <li className="listed-content">Calcolo Prescrizione</li>
              <li className="listed-content">Elenco Reati</li>
              <li className="listed-content"><a href="/compensi">Compensi Avvocati</a></li>
            </ul>
          </div>
          <div className=""></div>
        </div>
      </div>

      <script src="js/jquery-3.3.1.min.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/jquery.sticky.js"></script>
      <script src="js/main.js"></script>
    </>
  )
}
