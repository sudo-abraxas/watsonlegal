'use client'

import React from "react"
import Header from "../common/header"

export default function Page() {

    type SanzioneDetentiva = 'less-than-one' | 'between-one-and-three' | 'four' | 'more-than-four'
    type ProgrammaTrattamento = 'yes' | 'no'
    type State = { response: string | null, sanzioneDetentiva: SanzioneDetentiva, programmaTrattamento: ProgrammaTrattamento }

    const defaultState: State = { response: null, sanzioneDetentiva: "less-than-one", programmaTrattamento: 'yes' }

    const [state, setState] = React.useState<State>(defaultState)

    function computeResponse(): void {
        switch (state.sanzioneDetentiva) {
            case "less-than-one":
                setState({ ...state, response: "Si può chiedere la conversione in pena pecuniaria sostitutiva" })
                return
            case "between-one-and-three":
                setState({ ...state, response: "Si può chiedere il lavoro di pubblica utilità sostitutivo" })
                return
            case "more-than-four":
                setState({ ...state, response: "Non si possono chiedere misure alternative" })
                return
            case "four":
                setState({ ...state, response: state.programmaTrattamento == 'yes' ? 'Si può chiedere la semilibertà sostitutiva' : 'Si può chiedere la detenzione domiciliare sostitutiva' })
                return
        }
    }

    function resetAll(): void {
        setState(defaultState)
    }

    function setSanzioneDetentivaValue(value: string): void {
        setState({ ...state, sanzioneDetentiva: value as SanzioneDetentiva })
    }

    function setProgrammaTrattamentoValue(value: string): void {
        setState({ ...state, programmaTrattamento: value as ProgrammaTrattamento })
    }

    function showOtherHtmlNodes(): React.ReactNode {
        if (state.sanzioneDetentiva != "four") {
            return null
        }

        return (
            <div>
                <label htmlFor="programma-trattamento-value">
                    È stato disposto un programma di trattamento che preveda un’attività lavorativa, di studio o formazione professionale, o comunque attività utili alla rieducazione e reinserimento sociale del condannato?
                    <select name="programma-trattamento-value" id="programma-trattamento-value" defaultValue={state.programmaTrattamento} onChange={event => setProgrammaTrattamentoValue(event.target.value)}>
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
            <h1>SANZIONI SOSTITUTIVE PENE BREVI, applicabili direttamente dal giudice</h1>
            <div>
                <div>
                    <label htmlFor="sanzione-detentiva-value">A quanto ammonta la prevedibile sanzione detentiva che irrogherà il giudice?</label>
                    <select name="sanzione-detentiva-value" id="sanzione-detentiva-value" defaultValue={state.sanzioneDetentiva} onChange={event => setSanzioneDetentivaValue(event.target.value)}>
                        <option value="less-than-one">Meno di uno</option>
                        <option value="between-one-and-three">Tra 1 e 3 (incluso)</option>
                        <option value="four">4</option>
                        <option value="more-than-four">Più di 4</option>
                    </select>
                </div>
                <div>
                    {showOtherHtmlNodes()}
                </div>
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