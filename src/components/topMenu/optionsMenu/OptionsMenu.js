import React, { Component } from 'react';
import { ReactComponent as CloseIcon } from '../statsMenu/x.svg';

class OptionsMenu extends Component {

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
            <div>
                {this.props.showOptions
                    ? <div> <div className="absolute z-10 bg-slate-900/50 top-0 left-0 w-full h-full " onClick={this.props.toggleOptionsMethod}>
                    </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                w-[28rem] h-[39rem] z-20 dark:bg-neutral-800 bg-neutral-50
                                grid grid-cols-auto
                                drop-shadow-2xl rounded-lg
                                ">
                            <div className="absolute justify-self-end h-min pr-5 pt-4 text-neutral-500" onClick={this.props.toggleOptionsMethod}>
                                <CloseIcon />
                            </div>
                            <div className="row dark:text-neutral-50 text-neutral-800 text-center mt-8">
                                <span className=" text-lg uppercase font-bold ">
                                    About
                                </span>
                            </div>
                            <div className="row dark:text-white text-neutral-800 mt-8 px-3 mr-2">
                                <div className=" text-base  self-start">
                                    <div className='px-5 border-b-4 mt-[-2rem] mb-2'>
                                        <div className='py-1'>Questa è la versione Italiana non ufficiale di <a className='font-bold' href='https://www.powerlanguage.co.uk/wordle/'>Wordle</a>. </div>
                                        <div className='py-1'>L'idea di <a href='https://twitter.com/intent/tweet?screen_name=powerlanguish' className='font-bold'>@PowerLanguish</a> è tanto semplice quanto divertente, quindi ho deciso di omaggiarlo con una traduzione italiana del suo gioco - l'ho creata da zero, non ho copiato una singola riga di codice per realizzarla. </div>
                                        <div className='py-1'>Ho deciso di creare Wordle in Italiano per migliorare le mie skills nella creazione di web-apps con React. Se siete curiosi di sapere come ho fatto, potete trovare tutto il codice di quest'applicazione su GitHub, e quello necessario alla creazione di un dizionario di parole per il gioco stesso (scritto in NodeJS).</div>
                                        <div className='py-1'>Qualsiasi gioco di parole non sarebbe possibile senza l'immane lavoro di catalogazione dei termini della lingua italiana ad opera di Luigi M. Bianchi - che è possibile trovare <a href="http://www.yorku.ca/lbianchi/italian.html" className='font-bold'>qui</a>. </div>
                                    </div>
                                    <div className='px-5 mt-1 mb-6'>Grazie per aver giocato con me. -<span className='font-bold text-lg'>Max Pace</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : <span></span>}
            </div>
        )
    }
}

export default OptionsMenu;