# choochoo

A browser-based ASCII steam locomotive animation — a JavaScript port of the classic Unix `sl` command.

Live at [choochoo.ooo](https://choochoo.ooo)

## What it is

A D51 steam locomotive rolls across a black terminal-green screen, complete with animated wheels and rising smoke puffs. It loops continuously and adapts to the browser window size.

## Files

- `index.html` — the page shell and animation loop
- `sl.js` — locomotive ASCII art data (body, wheel frames, coal car, smoke)
- `deploy.sh` — rsync-based deploy script to a remote host

## Deploying

Edit `deploy.sh` to set your `HOST` and `DIR`, then run:

```sh
./deploy.sh
```

## Credits

Based on `sl` by Toyoda Masashi: https://github.com/mtoyoda/sl
