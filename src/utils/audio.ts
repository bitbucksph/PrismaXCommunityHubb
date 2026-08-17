// Web Audio API Synthesizer - Sound effects disabled
class SoundController {
  public enabled: boolean = false;

  public playClick(_pitch: number = 800) {
    // Disabled
  }

  public playHover() {
    // Disabled
  }

  public playSuccess() {
    // Disabled
  }

  public playOpen() {
    // Disabled
  }
}

export const soundManager = new SoundController();

