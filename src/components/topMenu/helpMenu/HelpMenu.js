import React, { Component } from 'react';
import GuessDisplay from '../../guess/GuessDisplay';
import { ReactComponent as CloseIcon } from '../statsMenu/x.svg';

class HelpMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    static defaultProps = {
        toggleStatsMethod: "",
        toggleOptionsMethod: "",
        toggleHelpMethod: ""
    }


    render() {
        return (
            <span>
                {this.props.showHelp
                    ? <div> <div className="absolute z-10 bg-slate-900/50 top-0 left-0 w-full h-full " onClick={this.props.toggleHelpMethod}>
                    </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                    w-[28rem] h-[42rem] z-20 dark:bg-neutral-800 bg-neutral-50
                                    grid grid-cols-auto
                                    drop-shadow-2xl rounded-lg
                                    ">
                            <div className="absolute justify-self-end h-min pr-5 pt-4 text-neutral-500" onClick={this.props.toggleHelpMethod}>
                                <CloseIcon />
                            </div>
                            <div className="row dark:text-neutral-50 text-neutral-800 text-center mt-6">
                                <span className=" text-l uppercase font-bold ">
                                    Come Giocare
                                </span>

                            </div>
                            <div className="dark:text-white text-neutral-800 mx-5">
                                <div className=" text-base  self-start">
                                    <div className='px-5 border-b-4 mt-[-2rem] mb-6'>
                                        <div className='py-1'>Prova ad indovinare la parola in <span className='font-bold'>6 tentativi</span>. </div>
                                        <div className='py-1'>Ogni tentativo deve contenere una <span className='font-bold'>parola esistente di 5 lettere</span> (comprese parole NSFW e prestiti linguistici - e.g. PROXY). </div>
                                        <div className='py-1'>Premi sulla tastiera a schermo il pulsante "Invio" per confermare il tuo tentativo. </div>
                                        <div className='py-1'>Dopo ogni tentativo il colore delle lettere usate cambierà, per aiutarti a scoprire la soluzione.</div>
                                    </div>
                                    <div className='px-5'>
                                        <div className='font-bold uppercase'>ESEMPI</div>
                                        <GuessDisplay currentGuess="WAFER" maximumLength={5} statusArray={["correctInPlace", "neutral", "neutral", "neutral", "neutral"]} />
                                        <span>La lettera W è al posto giusto</span>
                                        <GuessDisplay currentGuess="CICCA" maximumLength={5} statusArray={["neutral", "neutral", "neutral", "neutral", "correct"]} />
                                        <span>La lettera A è corretta, ma nello slot sbagliato</span>
                                        <GuessDisplay currentGuess="MALTA" maximumLength={5} statusArray={["neutral", "neutral", "neutral", "wrong", "neutral"]} />
                                        <span>La lettera T non è al posto giusto</span>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    : <span></span>}
            </span>
        )
    }

}

export default HelpMenu;