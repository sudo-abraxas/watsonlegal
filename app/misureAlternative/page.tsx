'use client'

import React from "react"
import Header from "../common/header"
export default function Page() {

    type AnniPenaResidua = 'lt-eq-1' | 'lt-eq-2' | 'lt-eq-3' | 'lt-eq-4' | 'between-4-and-6' | 'gt-6'
    type CategoriaCondannato = 'yes' | 'no'
    type State = { response: string | null, anniPenaResidua: AnniPenaResidua, categoriaCondannato: CategoriaCondannato }

    const defaultState: State = { response: null, anniPenaResidua: 'lt-eq-1', categoriaCondannato: 'yes' }

    const [state, setState] = React.useState<State>(defaultState)

    function computeResponse(): void {
        switch (state.anniPenaResidua) {
            case "lt-eq-1":
                setState({ ...state, response: "Si può chiedere la conversione in pena pecuniaria o la semilibertà" })
                return
            case "lt-eq-2":
                setState({ ...state, response: "Si può chiedere la detenzione domiciliare" })
                return
            case "lt-eq-3":
                setState({ ...state, response: "Si può chiedere l’affidamento al servizio sociale" })
                return
            case "lt-eq-4":
                setState({ ...state, response: state.categoriaCondannato == 'yes' ? "Si può chiedere la detenzione domiciliare" : "Non si possono chiedere misure alternative" })
                return
            case "between-4-and-6":
                setState({ ...state, response: "Il condannato può accedere all’affidamento in prova ai servizi sociali solo se tossicodipendente o alcoldipendente e sta svolgendo un percorso di disintossicazione" })
                return
            case "gt-6":
                setState({ ...state, response: "Non si possono chiedere misure alternative" })
                return
        }
    }

    function resetAll(): void {
        setState(defaultState)
    }

    function setAnniPenaResiduaValue(value: string): void {
        setState({ ...state, anniPenaResidua: value as AnniPenaResidua })
    }

    function setCategoriaCondannatoValue(value: string): void {
        setState({ ...state, categoriaCondannato: value as CategoriaCondannato })
    }

    function showOtherHtmlNodes(): React.ReactNode {
        if (state.anniPenaResidua != "lt-eq-4") {
            return null
        }

        return (
            <div>
                <label htmlFor="categoria-condannato-value">
                    Il condannato rientra in una di queste categorie?<br />
                    a) Donna incinta o madre di prole di età inferiore ad anni dieci con lei convivente;<br />
                    b) padre, esercente la poterà, di prole di età inferiore ad anni dieci con lui convivente, quando la madre sia deceduta o altrimenti assolutamente impossibilitata a dare assistenza alla prole;<br />
                    c) persona in condizioni di salute particolarmente gravi, che richiedano costanti contatti con i presidi sanitari territoriali;<br />
                    d) persona di età superiore a sessanta anni, se inabile anche parzialmente;<br />
                    e) persona minore di anni ventuno per comprovate esigenze di salute, di studio, di lavoro e di famiglia.<br />
                    <select name="categoria-condannato-value" id="categoria-condannato-value" defaultValue={state.categoriaCondannato} onChange={event => setCategoriaCondannatoValue(event.target.value)}>
                        <option value="yes">Sì</option>
                        <option value="no">No</option>
                    </select>
                </label>
            </div>
        )
    }

    return (
    <>
        <Header></Header>
        <br />
        <br />
        <br />
        <br />
        <div className="container">
            <h1>MISURE ALTERNATIVE ALLA DETENZIONE, applicabili post condanna</h1>
            <div>
                <div>
                    <label htmlFor="anni-pena-residua-value">Quanti anni di pena residua deve ancora scontare?</label><br />
                    <select name="anni-pena-residua-value" id="anni-pena-residua-value" defaultValue={state.anniPenaResidua} onChange={event => setAnniPenaResiduaValue(event.target.value)}>
                        <option value="lt-eq-1">Fino a 1 anno</option>
                        <option value="lt-eq-2">Fino a 2 anni</option>
                        <option value="lt-eq-3">Fino a 3 anni</option>
                        <option value="lt-eq-4">Fino a 4 anni</option>
                        <option value="between-4-and-6">Tra 4 e 6 anni</option>
                        <option value="gt-6">Più di 6 anni</option>
                    </select>
                </div>
                <div>
                    {showOtherHtmlNodes()}
                </div>
                <br />
                <br />
                <div>
                    <input className="reset ring-2" type="button" value="Reset" onClick={resetAll} /> 
                    <input className="calculate ring-2" type="button" value="Calcola" onClick={computeResponse} />
                </div>
                <div>
                    {state.response}
                </div>
            </div>
        </div>
    </>
    )
}