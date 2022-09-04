// audiocall for book page
import { WordObj } from "./audio_types";
import { getWords, createAudiocallCard } from "./get-words";

export const clickListener = () => {
  const audiocallBtn = document.querySelector(".play-audiocall");
  audiocallBtn?.addEventListener("click", () => {
    console.log("audiocal btn clicked!");
    const level = localStorage.getItem("level") || 0;
    const page = localStorage.getItem("page") || 0;
    const levelWords = getWords(Number(page), Number(level)).then((levelWords: Array<WordObj>) => {
      // console.log("getWords on btn->", levelWords);
      createAudiocallCard(levelWords);
    }
    );
  })
}

