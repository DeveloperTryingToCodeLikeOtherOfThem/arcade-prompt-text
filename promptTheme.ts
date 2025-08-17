
namespace game {
    let _prompt = new game.Prompt()

    //% blockId="gamethemeforprompt" block="ask for string theme for the prompt text message $message $answerLength $colorAlphabet $colorBackground $colorBottomBackground $colorBottomText $colorCursor $colorInput $colorInputHighlighted $colorInputText $colorPrompt"
    //% message.shadow=text 
    //% answerLength.defl=12
    //% answerLength.max=24
    //% answerLength.min=1
    //% colorAlphabet.defl=4
    //% colorBackground.defl=15
    //% colorBottomText.defl=3
    //% colorCursor.defl=3
    //% colorInput.defl=9
    //% colorInputHighlighted.defl=12
    //% colorInputText.defl=11
    //% colorPrompt.defl=8
    //% colorBottomBackground.defl=5
    //% group="Prompt"
    //% inlineInputMode=inline 
    //% help=github:arcade-prompt-text/docs/game-prompt-theme
    export function askForStringThemeForPrompt(message: string, answerLength: number, colorAlphabet: number, colorBackground: number, colorBottomBackground: number, colorBottomText: number, colorCursor: number, colorInput: number, colorInputHighlighted: number, colorInputText: number, colorPrompt: number) {
        _prompt.show(message, answerLength)
        return _prompt.theme = { colorAlphabet: colorAlphabet, colorBackground: colorBackground, colorBottomBackground: colorBottomBackground, colorBottomText: colorBottomText, colorCursor: colorCursor, colorInput: colorInput, colorInputHighlighted: colorInputHighlighted, colorInputText: colorInputText, colorPrompt: colorPrompt }
    }

}

// prompt.theme = {colorAlphabet: 2, colorBackground: 3, colorBottomBackground: 4, colorBottomText: 1, colorCursor: 9, colorInput: 10, colorInputHighlighted: 11, colorInputText: 12, colorPrompt: 13 }
