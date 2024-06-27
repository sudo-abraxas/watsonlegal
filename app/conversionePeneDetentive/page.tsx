'use client'

import React from "react"
import moment from "moment"
import Header from "../common/header"

export default function Page() {

    type Data = { months: number, value: number }

    const [data, setData] = React.useState<Data>({ months: 1, value: 75 })
    const [response, setResponse] = React.useState<string | null>(null)

    function setMonths(value: React.ChangeEvent<HTMLInputElement>): void {
        setData({ ...data, months: parseInt(value.target.value) })
    }

    function setValue(value: React.ChangeEvent<HTMLInputElement>): void {
        setData({ ...data, value: parseFloat(value.target.value) })
    }

    function compute(): void {
        const computedValue = data.months * 30 * data.value
        setResponse(`La pena detentiva può essere convertita in pena pecuniaria con la somma di € ${computedValue}`)
    }

    return (
    <>
        <Header></Header>
        <br />
        <br />
        <br />
        <br />
        <div className="container spacer">
            <h1>CONVERSIONE PENE DETENTIVE IN PENE PECUNIARIE</h1>
            <br />
            <div>
                In base alla riforma Cartabia, il giudice "<em>individua il valore giornaliero al quale può essere assoggettato l’imputato e lo moltiplica per i giorni di pena detentiva. Il valore giornaliero <u>non può essere inferiore a 5 euro e superiore a 2500 euro</u></em>".
            </div>
            <div>
                Con la sentenza n. 28 del 2020, la Corte costituzionale - pronunciandosi su varie questioni di legittimità costituzionale sollevate dal Tribunale di Taranto e dal Tribunale di Ravenna - ha dichiarato l’illegittimità costituzionale dell’art. 53, secondo comma, della legge 24 novembre 1981 n. 689 (Modifiche al sistema penale), nella parte in cui prevede che «[i]l valore giornaliero non può essere inferiore alla somma indicata dall’art. 135 del codice penale e non può superare di dieci volte tale ammontare», anziché «[i]l valore giornaliero non può essere inferiore a 75 euro e non può superare di dieci volte la somma indicata dall’art. 135 del codice penale».
            </div>
            <div>
                In base a queste premesse, terremo come base di calcolo il tasso di conversione di 75€ al giorno, con l'accortezza di modificarlo nel caso in cui le possibilità economiche dell'imputato si discostino dalla media.
            </div>
            <br /><br />
            <div>
                <label htmlFor="months">Durata della pena (mesi)</label><br />
                <input name="months" id="months" type="number" min={0} step={1} pattern="\d+" defaultValue={data.months} onChange={setMonths} />
            </div>
            <br />
            <div>
                <label htmlFor="value">Valore (€)</label><br />
                <input name="value" id="value" type="number" min={0} defaultValue={data.value} onChange={setValue} />
            </div>
            <br />
            <div><button className="calculate ring-2" onClick={compute}>Calcola</button></div>
            <br />
            <div>
                {response}
            </div>
        </div>
    </>
    )
}