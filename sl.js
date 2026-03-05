/**
 * sl.js — Steam Locomotive
 *
 * A self-contained JavaScript port of the classic `sl` Unix command.
 *
 * Based on sl by Toyoda Masashi:
 *   https://github.com/mtoyoda/sl
 *   Copyright 1993, 1998, 2014 Toyoda Masashi (mtoyoda@acm.org)
 *
 *   "Everyone is permitted to do anything on this program including copying,
 *    modifying, and improving, unless you try to pretend that you wrote it.
 *    i.e., the above copyright notice has to appear in all copies.
 *    THE AUTHOR DISCLAIMS ANY RESPONSIBILITY WITH REGARD TO THIS SOFTWARE."
 *
 * This JavaScript port is offered under the same terms.
 */

// ── D51 Locomotive body (7 lines) ─────────────────────────────────────────────
// Source: D51STR1–D51STR7 from sl.h (sl version 5.02)
const D51_BODY = [
  "      ====        ________                ___________ ",
  "  _D _|  |_______/        \\__I_I_____===__|_________| ",
  "   |(_)---  |   H\\________/ |   |        =|___ ___|   ",
  "   /     |  |   H  |  |     |   |         ||_| |_||   ",
  "  |      |  |   H  |__--------------------| [___] |   ",
  "  | ________|___H__/__|_____/[][]~\\_______|       |   ",
  "  |/ |   |-----------I_____I [][] []  D   |=======|__ ",
];

// ── D51 Wheel animation (6 frames × 3 lines) ──────────────────────────────────
// Source: D51WHL11–D51WHL63 from sl.h
const D51_WHEELS = [
  [
    "__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|__ ",
    " |/-=|___|=    ||    ||    ||    |_____/~\\___/        ",
    "  \\_/      \\O=====O=====O=====O_/      \\_/            ",
  ],
  [
    "__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|__ ",
    " |/-=|___|=O=====O=====O=====O   |_____/~\\___/        ",
    "  \\_/      \\__/  \\__/  \\__/  \\__/      \\_/            ",
  ],
  [
    "__/ =| o |=-O=====O=====O=====O \\ ____Y___________|__ ",
    " |/-=|___|=    ||    ||    ||    |_____/~\\___/        ",
    "  \\_/      \\__/  \\__/  \\__/  \\__/      \\_/            ",
  ],
  [
    "__/ =| o |=-~O=====O=====O=====O\\ ____Y___________|__ ",
    " |/-=|___|=    ||    ||    ||    |_____/~\\___/        ",
    "  \\_/      \\__/  \\__/  \\__/  \\__/      \\_/            ",
  ],
  [
    "__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|__ ",
    " |/-=|___|=   O=====O=====O=====O|_____/~\\___/        ",
    "  \\_/      \\__/  \\__/  \\__/  \\__/      \\_/            ",
  ],
  [
    "__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|__ ",
    " |/-=|___|=    ||    ||    ||    |_____/~\\___/        ",
    "  \\_/      \\_O=====O=====O=====O/      \\_/            ",
  ],
];

// ── D51 Coal car (10 lines — aligns top-to-bottom with locomotive) ────────────
// Source: COAL01–COAL10 from sl.h
const D51_COAL = [
  "                              ",
  "                              ",
  "    _________________         ",
  "   _|                \\_____A  ",
  " =|                        |  ",
  " -|                        |  ",
  "__|________________________|_ ",
  "|__________________________|_ ",
  "   |_D__D__D_|  |_D__D__D_|   ",
  "    \\_/   \\_/    \\_/   \\_/    ",
];

// ── Smoke (4 rows per frame, 4 frames) ───────────────────────────────────────
// Smoke characters rise above the funnel and drift slightly left.
const SMOKE_FRAMES = [
  ["(   )", "(    )", "( )",   "(   )"],
  ["(    )", "(   )", "(   )", "( )  "],
  ["(  )",   "(   )", "(    )", "(   )"],
  ["(   )",  "(  )",  "(   )", "(    )"],
];
const SMOKE_H = SMOKE_FRAMES[0].length; // rows of smoke above train

