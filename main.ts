GHBit.onKey(GHBit.enButton.B3, function () {
    radio.sendString("Blue")
})
GHBit.onKey(GHBit.enButton.B1, function () {
    radio.sendString("Red")
})
GHBit.onKey(GHBit.enButton.B4, function () {
    radio.sendString("Yellow")
})
GHBit.onKey(GHBit.enButton.B2, function () {
    radio.sendString("Green")
})
basic.showIcon(IconNames.Heart)
radio.setGroup(218)
radio.setTransmitPower(7)
basic.forever(function () {
    if (GHBit.Rocker(GHBit.enRocker.Up)) {
        radio.sendString("Up")
        basic.showArrow(ArrowNames.North)
    } else if (GHBit.Rocker(GHBit.enRocker.Down)) {
        radio.sendString("Down")
        basic.showArrow(ArrowNames.South)
    } else if (GHBit.Rocker(GHBit.enRocker.Left)) {
        radio.sendString("Left")
        basic.showArrow(ArrowNames.West)
    } else if (GHBit.Rocker(GHBit.enRocker.Right)) {
        radio.sendString("Right")
        basic.showArrow(ArrowNames.East)
    } else if (GHBit.Rocker(GHBit.enRocker.Press)) {
        radio.sendString("Press")
        basic.showIcon(IconNames.No)
    } else if (GHBit.Rocker(GHBit.enRocker.Nostate)) {
        radio.sendString("Nostate")
        basic.showIcon(IconNames.No)
    }
})
