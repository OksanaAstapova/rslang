const createUserAPI = async (user: any) => {
    const rawResponse = await fetch('https://rssslang.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    const content = await rawResponse.json();
    console.log (content);
};

const loginUserAPI = async (user: any) => {
    const rawResponse = await fetch('https://rssslang.herokuapp.com/signin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    const content = await rawResponse.json();
  
    console.log(content);
  };

export const createUser = () => {
    const submit = document.querySelector('#submit-registration') as HTMLButtonElement;
    const login = document.querySelector('#username1') as HTMLInputElement;
    const email = document.querySelector('#email') as HTMLInputElement;
    const password = document.querySelector('#password1') as HTMLInputElement;
    const registerLogin = document.querySelector(".wrapper__register") as HTMLElement;

    submit.addEventListener('click', ()=>{
        
        const user = {  "email": email.value, 
                        "password": password.value }

                        

        if(password.value.length > 7 && email.value.includes('@')){
            console.log(user)
            createUserAPI(user);
            registerLogin.style.display = 'none';

        }

    })

}

export const loginUser = () => {
    const submit = document.querySelector('#submit-login') as HTMLButtonElement;
    const login = document.querySelector('#username') as HTMLInputElement;
    const password = document.querySelector('#password') as HTMLInputElement;

    submit.addEventListener('click', () => {
        console.log('*')
        const user = {  "login": login.value,
                        "password": password.value }
                        createUserAPI(user)
    })

}


