'use client'

import moment from "moment"
import React from "react"
import Header from "../common/header"

export default function Page() {

    const [startDate, setStartDate] = React.useState<string | undefined>(undefined)
    const [response, setResponse] = React.useState<string | null>(null)

    function computeResponse(): void {
        if (startDate) {
            const initialDate = moment(startDate)
            const endDate = initialDate.add(20, 'days').format('DD/MM/yyyy')
            setResponse(`Il termine ai sensi dell'articolo 415bis è in data: ${endDate}`)
        } else {
            setResponse('Inserire una data valida')
        }
    }

    return (
    <>  
        <Header></Header>
        <br />
        <br />
        <br />
        <br />
        <div className="container">
            <div className="sm:text-left md:text-left lg:text-left" style={{ backgroundImage: "url('images/blocconotes.png')", backgroundPosition: "top", backgroundSize: "cover", backgroundRepeat: "no-repeat", paddingTop: "12vw", paddingBottom: "5vw", paddingLeft: "5vw", paddingRight: "5vw", color: "black"}}>
                <h1>Termine art 415bis</h1>
                <br /><hr></hr><br />
                <div>
                    <label htmlFor="start-date"><strong>Data di inizio</strong></label><span> </span>
                    <input name="start-date" id="start-date" value={startDate} type="date" onChange={e => setStartDate(e.target.value)} /><br />
                    <button className="calculate ring-2" onClick={computeResponse}>Calcola</button>
                    <br /><br />
                    <div>
                        <strong>{response}</strong>
                        <br/><br/>
                    </div>
                </div>
                <p>
                    Ai sensi dell’art. 415bis l’imputato ha diritto di compiere, entro 20 giorni della notifica dell’atto, una
                    serie di azioni:<br /><br />
                    - Presentare memorie;<br />
                    - Produrre documenti;<br />
                    - Depositare documentazione relativa ad investigazioni del difensore;<br />
                    - Chiedere al Pubblico Ministero il compimento di atti di indagine;<br />
                    - Presentarsi per rilasciare dichiarazioni;<br />
                    - Chiedere di essere sottoposto ad interrogatorio.<br /><br />
                    Ai fini del calcolo del termine dei 20 giorni, si ha riguardo al perfezionamento dell’ultima notifica
                    intercorsa tra della del difensore e quella dell’imputato.
                </p>
            </div>
        </div>
    </>
    )
}