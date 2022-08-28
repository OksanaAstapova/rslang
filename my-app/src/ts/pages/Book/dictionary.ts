
export const getDifficulties = () => {
    
    const dictionaryButton = document.querySelector('.dictionary') as HTMLButtonElement;

    dictionaryButton.addEventListener('click', () => {
        dictionaryButton.classList.toggle('active')
    })
}

export const playGames = () => {

    const train = document.querySelector('.train') as HTMLButtonElement;
    const playWrapper = document.querySelector('.play-games') as HTMLElement;

    train.addEventListener('click', () => {
        train.classList.toggle('active');
        if(train.classList.contains('active')){
            playWrapper.style.display = 'flex';
        }else{
            playWrapper.style.display = 'none';

        }

    })

}