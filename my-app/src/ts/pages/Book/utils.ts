
export const switchLang = () => {

    const enButton = document.querySelector('.en') as HTMLButtonElement;
    const ruButton = document.querySelector('.ru') as HTMLButtonElement;
    const descr_ru = document.querySelectorAll('.description-ru');
    const descr_en = document.querySelectorAll('.description-eng');

    ruButton.addEventListener('click', ()=>{
        
        ruButton.disabled = true;
        enButton.disabled = false;

        descr_ru.forEach(i =>{
            i.classList.remove('hide');
        })

        descr_en.forEach(i =>{
            i.classList.add('hide');
        })
    })

    enButton.addEventListener('click', ()=>{
        
        ruButton.disabled = false;
        enButton.disabled = true;

        descr_ru.forEach(i =>{
            i.classList.add('hide');
        })

        descr_en.forEach(i =>{
            i.classList.remove('hide');
        })
    })
}