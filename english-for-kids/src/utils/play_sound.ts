import { state } from '../config/state_game';

export async function playSound(url:string):Promise<void> {
  const audio = new Audio(`../public/audio/${url}.mp3`);
  if (state.playing) {
    state.playing = false;

    await audio.play();

    audio.onended = () => {
      state.playing = true;
    };
  }
}
