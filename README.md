# Technical Report: Mario Kart-Inspired Racing Simulator

## Project Overview:
The Mario Kart-inspired racing simulator is a Node.js-based application designed to simulate a racing competition between two characters, Mario and Luigi, over a series of five rounds. The project implements game mechanics similar to those found in the classic Mario Kart game, including random track events, dice rolls to determine outcomes, and a scoring system to declare the winner.

## Requirements Met:
The project successfully meets the following requirements:

### Players:
Two characters, Mario and Luigi, are defined with attributes such as speed, handling, power, and points.

### Tracks:
The characters race on a randomly selected track composed of straight sections, curves, and clash zones.

### Game Mechanics:
Each round involves rolling dice to determine outcomes based on the type of track section:
- On straight sections, speed attributes are compared to determine which player scores a point.
- On curves, handling attributes are compared to determine point allocation.
- Clash zones trigger a confrontation, where power attributes are compared, and the loser loses a point if they have any.

### Scoring System:
Points are awarded based on winning track sections or deducted during confrontations.
The player with the most points at the end of five rounds is declared the winner.

## Implementations:
The project includes the following key implementations:

### Character Definition:
Characters are defined as JavaScript objects with attributes representing speed, handling, power, and points.

### Random Track Generation:
The `getRandomBlock` function randomly selects track sections (straight, curve, or clash) for each round.

### Dice Roll Simulation:
The `rollDice` function simulates rolling a six-sided dice to determine outcomes during track sections and confrontations.

### Game Engine:
The `playRaceEngine` function orchestrates the game flow, including track section selection, dice rolls, comparisons of attributes, and point allocation.

### Result Declaration:
The `declareWinner` function compares the final points of both players and declares the winner based on the scoring system.

## Conclusion:
The Mario Kart-inspired racing simulator project successfully implements the specified requirements, offering an engaging and interactive experience reminiscent of the classic Mario Kart game. With further development, such as multiplayer support and enhanced user interfaces, the project has the potential to provide an even more immersive gaming experience.
