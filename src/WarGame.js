import './WarGame.css'
import React, {useState} from 'react'
import CardDeckImage from './images/deck.png'
import CardCover from './images/cover.png'

function WarGame(props){
    const [state, setState] = useState({
        AppMode: 'NoAction',  // NoAction, Game, PlayerWin, AIWin
        MoveState: 'NoState', 
        CardsDeck: new Array(52),
        PlayerDeck: new Array(52),
        AIDeck: new Array(52),
        PlayerBank: new Array(52),
        AIBank: new Array(52),
        MoveCount: 0
    })

    const StartNewGame = () => {

    }

    const DoOneMove = () => {

    }

    const EndMove = () => {

    }

    const GetOneCardFromDeck = () => {

    }

    const draw_card = () => {
        
    }

    return (
        <div></div>
    )
}

export default WarGame