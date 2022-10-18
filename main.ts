function displayPokemon (pokemon: string) {
    if (pokemon == "charmander") {
        basic.showIcon(IconNames.Ghost)
    } else if (pokemon == "pikachu") {
        basic.showIcon(IconNames.Rollerskate)
    } else if (pokemon == "bulbasaur") {
        basic.showIcon(IconNames.Rabbit)
    } else {
        basic.showString(pokemon)
    }
}
radio.onReceivedString(function (receivedString) {
    pokemon2 = receivedString
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) > -45) {
        if (pokemons.indexOf(pokemon2) == -1) {
            displayPokemon(pokemon2)
            control.waitForEvent(EventBusValue.MICROBIT_BUTTON_EVT_DOWN, EventBusSource.MICROBIT_ID_BUTTON_AB)
            basic.showIcon(IconNames.Heart)
            pokemons.push(pokemon2)
        }
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    for (let waarde of pokemons) {
        displayPokemon(waarde)
    }
    basic.clearScreen()
})
let pokemon2 = ""
let pokemons: string[] = []
radio.setGroup(1)
pokemons = ["pikachu"]
