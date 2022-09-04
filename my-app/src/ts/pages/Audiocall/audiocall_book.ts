// audiocall for book page
import * as helpers from "../AboutTeam/helpers";
import { root } from "../../router";
import { WordObj, StatObj } from "./audio_types";
import { audiocallGame } from "./audiocall-game";
import { audioStatistic } from "./audio_stat";
import Component from "../../template/Component";
import Page from "../../template/Page";
import { randomPage, getWords, createAudiocallCard } from "./get-words";
import { createWords } from "../Book/create-content";
import { pagination } from "../Book/create-content";

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

