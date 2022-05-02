let val: number;
while (true) {
    val = pins.analogReadPin(AnalogPin.P4)
    basic.showNumber(val)
}
