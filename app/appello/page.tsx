'use client'

import React from "react"
import moment from "moment"
import Header from "../common/header"


export default function Page() {

    type Data = { startDate: string | null, daysDelayOption: number, absent: boolean, reservationDays: string }

    const [data, setData] = React.useState<Data>({ startDate: null, daysDelayOption: 15, absent: false, reservationDays: '0' })
    const [response, setResponse] = React.useState<string | null>(null)

    function setStartDate(value: React.ChangeEvent<HTMLInputElement>): void {
        setData({ ...data, startDate: value.target.value })
    }

    function setDaysDelayOption(value: React.ChangeEvent<HTMLInputElement>): void {
        setData({ ...data, daysDelayOption: parseInt(value.target.value) })
    }

    function setAbsent(value: React.ChangeEvent<HTMLInputElement>): void {
        setData({ ...data, absent: value.target.checked })
    }

    function setReservationDays(value: React.ChangeEvent<HTMLInputElement>): void {
        setData({ ...data, reservationDays: value.target.value })
    }

    function validate(): string[] {
        const errors: string[] = []

        const startDate = data.startDate
        const reservationDays = data.reservationDays
        
        if (!startDate) {
            errors.push("È obbligatorio specificare la data di inizio")
        } else {
            const parsedDate = moment(startDate)
            if (!parsedDate) {
                errors.push("La data di inizio non è valida")
            }
        }

        if (!reservationDays) {
            errors.push("È obbligatorio specificare i giorni di riserva presi dal Giudice")
        } else {
            const days = parseInt(reservationDays)

            if (isNaN(days)) {
                errors.push("I giorni di riserva specificati sono in un formato non valido")
            }

            if (days < 0) {
                errors.push("I giorni di riserva non possono essere un numero negativo")
            }
        }

        return errors
    }

    function compute() {
        const errors: string[] = validate()

        const startDate = data.startDate

        if (errors.length == 0) {
            const initialDate = moment(startDate)
            const endDate = initialDate.add(data.daysDelayOption, 'days').add(data.absent ? 15 : 0, 'days').add(data.reservationDays, 'days')
            
            setResponse(`Il termine è in data: ${endDate.format('DD/MM/yyyy')}`)
        } else {
            setResponse("Si sono verificati degli errori: " + errors.join(", "))
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
            <h1>Termine appello</h1>
            <br /><hr></hr><br />
            <p>
                I termini per proporre appello avverso provvedimenti in ambito penale sono ricavati dal combinato
                disposto degli articoli 544 e 585 c.p.p.<br/><br/>
                - 15 giorni per i provvedimenti emessi in seguito a procedimento in camera di consiglio e
                lettura dispositivo in udienza<br/>
                - 30 giorni se il Giudice si riserva, per la redazione della sentenza, per 15 giorni<br/>
                - 45 giorni se il Giudice si riserva, per la redazione della sentenza, per oltre 15 giorni (max
                90)<br/>
                Se imputato giudicato in assenza, +15giorni<br/>
            </p>
            <br/><br/>
            <div>
                <label htmlFor="start-date">Data di inizio</label>
                <input name="start-date" id="start-date" type="date" onChange={setStartDate} />
            </div>
            <div>
                <div>
                    <input type="radio" name="redazione-sentenza" value={15} id="rg-option-1" checked={data.daysDelayOption == 15} onChange={setDaysDelayOption} />
                    <label htmlFor="rg-option-1">Provvedimenti emessi in seguito a procedimento in camera di consiglio e lettura dispositivo in udienza</label>
                </div>
                <div>
                    <input type="radio" name="redazione-sentenza" value={30} id="rg-option-2" checked={data.daysDelayOption == 30} onChange={setDaysDelayOption} />
                    <label htmlFor="rg-option-2">Il Giudice si riserva, per la redazione della sentenza, per 15 giorni</label>
                </div>
                <div>
                    <input type="radio" name="redazione-sentenza" value={45} checked={data.daysDelayOption == 45} id="rg-option-3" onChange={setDaysDelayOption} />
                    <label htmlFor="rg-option-3">Il Giudice si riserva, per la redazione della sentenza, per oltre 15 giorni (max 90)</label>
                </div>
            </div>
            <div>
                <input type="text" name="giorni-riserva-giudice" id="giorni-riserva-giudice" value={data.reservationDays} onChange={setReservationDays} />
                <label htmlFor="giorni-riserva-giudice">Giorni di riserva presi dal Giudice</label>
            </div>
            <div>
                <input type="checkbox" name="in-assenza" id="chbx-in-assenza" checked={data.absent} onChange={setAbsent} />
                <label htmlFor="chbx-in-assenza">Imputato giudicato in assenza</label>
            </div>
            <div><button onClick={compute}>Calcola</button></div>
            <div>
                {response}
            </div>
        </div>
    </>
    )
}