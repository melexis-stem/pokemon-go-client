function toon_pokemon (pokemon: string) {
    if (pokemon == "charmander") {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 1000, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.InBackground)
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
        basic.showIcon(IconNames.Ghost)
    } else if (pokemon == "pikachu") {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 500, 499, 255, 0, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
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
    } else if (pokemon == "bulbasaur") {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 523, 1, 255, 0, 1000, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.InBackground)
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
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
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
    } else {
        basic.showString(pokemon)
    }
}
radio.onReceivedString(function (receivedString) {
    gevonden_pokemon = receivedString
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) > -45) {
        vang_nieuwe_pokemon(gevonden_pokemon, team)
    }
    basic.clearScreen()
})
function vang_nieuwe_pokemon (nieuwe_pokemon: string, pokemons: string[]) {
    if (pokemons.indexOf(nieuwe_pokemon) == -1) {
        toon_pokemon(nieuwe_pokemon)
        control.waitForEvent(EventBusValue.MICROBIT_BUTTON_EVT_DOWN, EventBusSource.MICROBIT_ID_BUTTON_AB)
        basic.showIcon(IconNames.Heart)
        pokemons.push(nieuwe_pokemon)
    }
}
input.onButtonPressed(Button.B, function () {
    for (let waarde of team) {
        toon_pokemon(waarde)
    }
    basic.clearScreen()
})
let gevonden_pokemon = ""
let team: string[] = []
radio.setGroup(1)
team = ["pikachu"]
