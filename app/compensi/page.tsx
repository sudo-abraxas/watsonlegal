'use client'

import moment from "moment"
import React from "react"
import Header from "../common/header"

export default function Page() {

    return (
    <>  
        <Header></Header>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="container">
            <div className="sm:text-left md:text-left lg:text-left" style={{ backgroundImage: "url('images/blocconotes.png')", backgroundPosition: "top", backgroundSize: "cover", backgroundRepeat: "no-repeat", paddingTop: "19vw", paddingLeft: "5vw", paddingRight: "5vw", color: "black"}}>
                <h1>Compensi Avvocati</h1>
                <br /><hr></hr><br />
                <p>
                Il Decreto del Ministero della Giustizia n. 55 del 10 marzo 2014, così come modificato con il D.M.
                n.147/2022, concerne la determinazione dei parametri per la liquidazione dei compensi per la
                professione forense.<br />
                Si riporta uno stralcio dei primi 4 articoli del D.M., utili per la determinazione di compensi in ambito
                penale:<br /><br />
                Art. 1.<br />
                Ambito applicativo<br />
                Il presente regolamento disciplina per le prestazioni professionali i parametri dei compensi
                all’avvocato quando all’atto dell’incarico o successivamente il compenso non sia stato determinato
                in forma scritta, in ogni caso di mancata determinazione consensuale degli stessi, comprese le
                ipotesi di liquidazione nonché di prestazione nell’interesse di terzi o prestazioni officiose previste
                dalla legge, ferma restando - anche in caso di determinazione contrattuale del compenso - la
                disciplina del rimborso spese di cui al successivo articolo 2.<br /><br />
                Art. 2.<br />
                Compensi e spese<br />
                1. Il compenso dell’avvocato è proporzionato all’importanza dell’opera.<br />
                2. Oltre al compenso e al rimborso delle spese documentate in relazione alle singole prestazioni,
                all’avvocato è dovuta - in ogni caso ed anche in caso di determinazione contrattuale - una somma
                per rimborso spese forfettarie (…) nella misura del 15 per cento del compenso totale per la
                prestazione, fermo restando quanto previsto dai successivi articoli 5, 11 e 27 in materia di rimborso
                spese per trasferta.<br /><br />
                Art. 3.<br />
                Applicazione analogica<br />
                Nell’ambito dell’applicazione dei precedenti articoli 1 e 2, per i compensi ed i rimborsi non regolati
                da specifica previsione si ha riguardo alle disposizioni del presente decreto che regolano
                fattispecie analoghe.<br /><br />
                Art. 4.<br />
                Parametri generali per la determinazione dei compensi in sede giudiziale<br />
                1. Ai fini della liquidazione del compenso si tiene conto delle caratteristiche, dell’urgenza e del
                pregio dell’attività prestata, dell’importanza, della natura, della difficoltà e del valore dell’affare,
                delle condizioni soggettive del cliente, dei risultati conseguiti, del numero e della complessità delle
                questioni giuridiche e di fatto trattate. In ordine alla difficoltà dell’affare si tiene particolare conto dei
                contrasti giurisprudenziali, e della quantità e del contenuto della corrispondenza che risulta essere
                stato necessario intrattenere con il cliente e con altri soggetti. Il giudice tiene conto dei valori medi
                di cui alle tabelle allegate, che, in applicazione dei parametri generali, possono essere aumentati
                fino al 50 per cento, ovvero possono essere diminuiti in ogni caso non oltre il 50 per cento. (…).
                1-bis. Il compenso determinato tenuto conto dei parametri generali di cui al comma 1 è
                ulteriormente aumentato fino al 30 per cento quando gli atti depositati con modalità telematiche
                sono redatti con tecniche informatiche idonee ad agevolarne la consultazione o la fruizione e, in
                particolare, quando esse consentono la ricerca testuale all’interno dell’atto e dei documenti
                allegati, nonché la navigazione all’interno dell’atto.<br />
                2. Quando in una causa l’avvocato assiste più soggetti aventi la stessa posizione processuale, il
                compenso unico può (…) essere aumentato per ogni soggetto oltre il primo nella misura del 30 per
                cento, fino a un massimo di dieci soggetti, e del 10 per cento per ogni soggetto oltre i primi dieci,
                fino a un massimo di trenta. La disposizione di cui al periodo precedente si applica quando più
                cause vengono riunite, dal momento dell’avvenuta riunione e nel caso in cui l’avvocato assiste un
                solo soggetto contro più soggetti.<br />
                3. Quando l’avvocato assiste ambedue i coniugi nel procedimento per separazione consensuale e
                nel divorzio a istanza congiunta, il compenso è liquidato (…) con una maggiorazione del 20 per
                cento su quello altrimenti liquidabile per l’assistenza di un solo soggetto.<br />

                4. Nell’ipotesi in cui, ferma l’identità di posizione processuale dei vari soggetti, la prestazione
                professionale nei confronti di questi non comporta l’esame di specifiche e distinte questioni di fatto
                e di diritto, il compenso altrimenti liquidabile per l’assistenza di un solo soggetto è ridotto in misura
                non superiore al 30 per cento.<br />
                4-bis. I parametri previsti dalla allegata tabella n. 7 per i procedimenti di volontaria giurisdizione si
                applicano esclusivamente a quelli aventi natura non contenziosa.<br />
                5. Il compenso è liquidato per fasi. Con riferimento alle diverse fasi del giudizio si intende
                esemplificativamente:<br />
                a) per fase di studio della controversia: l’esame e lo studio degli atti a seguito della consultazione
                con il cliente, le ispezioni dei luoghi, la ricerca dei documenti e la conseguente relazione o parere,
                scritti oppure orali, al cliente, precedenti la costituzione in giudizio;<br />
                b) per fase introduttiva del giudizio: gli atti introduttivi del giudizio e di costituzione in giudizio, e il
                relativo esame incluso quello degli allegati, quali ricorsi, controricorsi, citazioni, comparse,
                chiamate di terzo ed esame delle relative autorizzazioni giudiziali, l’esame di provvedimenti
                giudiziali di fissazione della prima udienza, memorie iniziali, interventi, istanze, impugnazioni, le
                relative notificazioni, l’esame delle corrispondenti relate, l’iscrizione a ruolo, il versamento del
                contributo unificato, le rinnovazioni o riassunzioni della domanda, le autentiche di firma o l’esame
                della procura notarile, la formazione del fascicolo e della posizione della pratica in studio, le
                ulteriori consultazioni con il cliente;<br />
                c) per fase istruttoria: le richieste di prova, le memorie illustrative o di precisazione o integrazione
                delle domande o dei motivi d’impugnazione, eccezioni e conclusioni, l’esame degli scritti o
                documenti delle altre parti o dei provvedimenti giudiziali pronunciati nel corso e in funzione
                dell’istruzione, gli adempimenti o le prestazioni connesse ai suddetti provvedimenti giudiziali, le
                partecipazioni e assistenze relative ad attività istruttorie, gli atti necessari per la formazione della
                prova o del mezzo istruttorio anche quando disposto d’ufficio, la designazione di consulenti di
                parte, l’esame delle corrispondenti attività e designazioni delle altre parti, l’esame delle deduzioni
                dei consulenti d’ufficio o delle altre parti, la notificazione delle domande nuove o di altri atti nel
                corso del giudizio compresi quelli al contumace, le relative richieste di copie al cancelliere, le
                istanze al giudice in qualsiasi forma, le dichiarazioni rese nei casi previsti dalla legge, le deduzioni
                a verbale, le intimazioni dei testimoni, comprese le notificazioni e l’esame delle relative relate, i
                procedimenti comunque incidentali comprese le querele di falso e quelli inerenti alla verificazione
                delle scritture private. Al fine di valutare il grado di complessità della fase rilevano, in particolare, le
                plurime memorie per parte, necessarie o autorizzate dal giudice, comunque denominate ma non
                meramente illustrative, ovvero le plurime richieste istruttorie ammesse per ciascuna parte e le
                plurime prove assunte per ciascuna parte. La fase rileva ai fini della liquidazione del compenso
                quando effettivamente svolta;<br />
                d) per fase decisionale: le precisazioni delle conclusioni e l’esame di quelle delle altre parti, le
                memorie, illustrative o conclusionali anche in replica, compreso il loro deposito ed esame, la
                discussione orale, sia in camera di consiglio che in udienza pubblica, le note illustrative accessorie
                a quest’ultima, la redazione e il deposito delle note spese, l’esame e la registrazione o
                pubblicazione del provvedimento conclusivo del giudizio, comprese le richieste di copie al
                cancelliere, il ritiro del fascicolo, l’iscrizione di ipoteca giudiziale del provvedimento conclusivo
                stesso; il giudice, nella liquidazione della fase, tiene conto, in ogni caso, di tutte le attività
                successive alla decisione e che non rientrano, in particolare, nella fase di cui alla lettera e);<br />
                e) per fase di studio e introduttiva del procedimento esecutivo: la disamina del titolo esecutivo, la
                notificazione dello stesso unitamente al precetto, l’esame delle relative relate, il pignoramento e
                l’esame del relativo verbale, le iscrizioni, trascrizioni e annotazioni, gli atti d’intervento, le ispezioni
                ipotecarie, catastali, l’esame dei relativi atti;<br />
                f) per fase istruttoria e di trattazione del procedimento esecutivo: ogni attività del procedimento
                stesso non compresa nella lettera e), quali le assistenze all’udienza o agli atti esecutivi di qualsiasi
                tipo.<br />
                5-bis. Il giudice può riconoscere, se richiesto, il compenso previsto per la fase di studio della
                controversia in favore del professionista che subentra nella difesa del cliente in un momento
                successivo alla fase introduttiva.<br />

                6. Nell’ipotesi di conciliazione giudiziale o transazione della controversia, il compenso per tale
                attività è determinato nella misura pari a quello previsto per la fase decisionale, aumentato di un
                quarto, fermo quanto maturato per l’attività precedentemente svolta.<br />
                7. Costituisce elemento di valutazione negativa, in sede di liquidazione giudiziale del compenso,
                l’adozione di condotte abusive tali da ostacolare la definizione dei procedimenti in tempi
                ragionevoli.<br />
                8. Il compenso da liquidare giudizialmente a carico del soccombente costituito può essere
                aumentato fino a un terzo rispetto a quello altrimenti liquidabile quando le difese della parte
                vittoriosa sono risultate manifestamente fondate.<br />
                9. Nel caso di dichiarata responsabilità processuale ai sensi dell’articolo 96 del codice di procedura
                civile, il compenso dovuto all’avvocato del soccombente è ridotto del 75 per cento rispetto a quello
                altrimenti spettante. Nei casi d’inammissibilità, improponibilità o improcedibilità della domanda il
                compenso è ridotto, ove concorrano gravi ed eccezionali ragioni esplicitamente indicate nella
                motivazione, nella misura del 50 per cento.<br />
                10. Nel caso di controversie a norma dell’articolo 140-bis del decreto legislativo 6 settembre 2005,
                n. 206, il compenso può essere aumentato fino al triplo rispetto a quello altrimenti liquidabile.
                10-bis. Nel caso di giudizi innanzi al Tribunale amministrativo regionale e al Consiglio di Stato il
                compenso relativo alla fase introduttiva del giudizio è aumentato sino al 50 per cento quando sono
                proposti motivi aggiunti. Quando è proposto ricorso incidentale, il compenso per la fase introduttiva
                è aumentato fino al 20 per cento. I compensi per la fase cautelare monocratica previsti dalle
                tabelle 21 e 22 sono dovuti solo quando vengono svolte attività ulteriori rispetto alla formulazione
                dell’istanza cautelare.<br />
                10-ter. Nel caso di appello cautelare davanti al Consiglio di Stato è dovuto il compenso previsto
                dalla allegata tabella n. 22 per la fase di studio della controversia e per la fase introduttiva del
                giudizio, nonché il 50 per cento del compenso relativo alla fase decisionale.<br />
                10-quater. Nei giudizi davanti alla Corte di cassazione, il compenso relativo alla fase decisionale
                del giudizio può essere aumentato fino al 50 per cento quando è depositata memoria ai sensi
                dell’articolo 378 del codice di procedura civile.<br />
                10-quinquies. Nei procedimenti di ammissione al passivo e di impugnazione dello stato passivo
                aventi ad oggetto crediti di lavoro dipendente, i parametri previsti dalla allegata tabella n. 20-bis
                possono essere ridotti fino al 50 per cento.<br />
                10-sexies. Nel caso di reclamo in corte di appello avverso la sentenza dichiarativa del fallimento e
                gli altri provvedimenti del tribunale fallimentare, si applicano i parametri previsti dalla allegata
                tabella n. 12.<br />
                10-septies. Per le attività difensive svolte dall’avvocato in qualità di curatore del minore, il
                compenso è liquidato applicando i parametri previsti dalle tabelle allegate al presente decreto
                relative alle procedure e ai giudizi in cui è di volta in volta nominato”
                Qui di seguito le Tabelle dei compensi, che riportano l’indicazione del valore minimo, medio e
                massimo per ciascuna fase.
                </p>
               
                      
                
            
            </div>
        </div>
    </>
    )
 }
