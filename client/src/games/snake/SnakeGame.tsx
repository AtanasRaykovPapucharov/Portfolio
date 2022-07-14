import React, { useEffect } from 'react';
import { UpArrowCode, DownArrowCode, LeftArrowCode, RightArrowCode } from './game/utils/constants';
import { Directions } from './game/enums/directions';
import { Renderer } from './game/utils/renderer';
import { Snake } from './game/models/snake';
import { Game } from './game/game';

function SnakeGame() { 
    useEffect(() => {
        const content = document.getElementById('content');
        const canvas = content.appendChild(document.createElement('canvas'));
        const renderer = new Renderer(canvas);
        
        let snake = new Snake();
        let game = new Game(renderer, snake);
        
        game.start();

        document.onkeydown = (e: KeyboardEvent) => {
            if (e.key == LeftArrowCode) {
                snake.changeDirection(Directions.left);
            }
            else if (e.key == RightArrowCode) {
                snake.changeDirection(Directions.right);
            }
            else if (e.key == UpArrowCode) {
                snake.changeDirection(Directions.up);
            }
            else if (e.key == DownArrowCode) {
                snake.changeDirection(Directions.down);
            }
        };
        
        document.getElementById('btn').onclick = () => {
            if (game.isStopped) {
                snake = new Snake();
                game = new Game(renderer, snake);
                game.start();
            }
        }
    });

    return (
        <div id="snake">
            <div className="container-flex-row">
                <div className="flex-item-6 text">
                    Score:&nbsp;&nbsp;&nbsp;
                    <span id="current-points" className="numb"></span>
                </div>
                <div className="flex-item-1">
                    <button id="btn" className="hidden">NEW GAME</button>
                </div>
            </div>
            <main id="content"></main>
        </div>
    );
}

export default SnakeGame;
