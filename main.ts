function toon_pokemon (pokemon: string) {
    if (pokemon == "charmander") {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 1000, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # . .
            . . # # .
            . . # . .
            `)
        basic.showLeds(`
            . . # . .
            . # # . .
            . # # . .
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . # . . .
            . # # . .
            . . # # .
            . . # . .
            `)
    } else if (pokemon == "pikachu") {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 500, 499, 255, 0, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        basic.showLeds(`
            . . # . .
            . . . # .
            . . # . .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . . # .
            . . # . .
            . # # . .
            # . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . .
            . # # # .
            # . # . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            # . # . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . # . #
            `)
    } else if (pokemon == "bulbasaur") {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 523, 1, 255, 0, 1000, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
        basic.showLeds(`
            . . . # #
            . # # . #
            . # . # #
            . # # # .
            # . . . .
            `)
        basic.showLeds(`
            . . . # #
            . # # # #
            . # # # #
            . # # # .
            # . . . .
            `)
    } else if (pokemon == "squirtle") {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1606, 1943, 186, 0, 1000, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (pokemon == "voltorb") {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 500, 1, 255, 0, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # . #
            . # . # .
            . . # . .
            `)
    } else {
        basic.showString(pokemon)
    }
    basic.clearScreen()
}
function vang_nieuwe_pokemon (nieuwe_pokemon: string, pokemons: string[]) {
    if (pokemons.indexOf(nieuwe_pokemon) == -1) {
        toon_pokemon(nieuwe_pokemon)
        control.waitForEvent(EventBusValue.MICROBIT_BUTTON_EVT_DOWN, EventBusSource.MICROBIT_ID_BUTTON_AB)
        basic.showIcon(IconNames.Heart)
        pokemons.push(nieuwe_pokemon)
    }
}
