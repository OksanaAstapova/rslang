import { BASE_SERVER } from '../../utils'
import { getRandomPage } from '../../utils'
import { Word } from '../../template/interfaces'

export default class SprintModel {
    
    array: Word[] = [];
    arrayEng: string[] = [];
    arrayRus: string[] = [];  
    arrayPron: string[] = [];
    arrayTranscr: string[] = [];
    arrayId: string[] = [];
    page: string = '';
    
    constructor () {
    }

    async fetchWords(group: string) {
        const response = await fetch(
        `https://rssslang.herokuapp.com/words?page=${this.page}&group=${group}`
    );
        const items = await response.json();
        this.array = items;    
    }

    async makeQuestionsArray(group:string, page:string = 'any') {
        if (page === 'any') {
            this.page = String(getRandomPage());
        } else {
            this.page = page;
        }
        await this.fetchWords(group);
        this.array.map((a) => this.arrayEng.push(a.word))
        this.array.map((a) => this.arrayRus.push(a.wordTranslate))
        this.array.map((a) => this.arrayPron.push(a.audio))
        this.array.map((a) => this.arrayTranscr.push(a.transcription))
        this.array.map((a) => this.arrayId.push(a.id))
    }

    playAudio(numberWordsEng: number){
        const audio = new Audio(`https://rssslang.herokuapp.com/${this.arrayPron[numberWordsEng -1]}`);
        audio.play();
    }

}
