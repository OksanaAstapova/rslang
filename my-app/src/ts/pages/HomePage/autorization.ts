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
    console.log(content)
    return content;
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
  
    return content;
  };

export const createUser = () => {
    const submit = document.querySelector('#submit-registration') as HTMLButtonElement;
    const login = document.querySelector('#username1') as HTMLInputElement;
    const email = document.querySelector('#email') as HTMLInputElement;
    const password = document.querySelector('#password1') as HTMLInputElement;
    const registerLogin = document.querySelector(".wrapper__register") as HTMLElement;

    submit.addEventListener('click', (e)=>{
      e.preventDefault()
        
        const user = {  "name": login.value,
                        "email": email.value, 
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
   


    submit.addEventListener('click', async (e) => {
      e.preventDefault()
        console.log('*')
        const user = {  "email": login.value,
                        "password": password.value }
      const content = await loginUserAPI(user)
      console.log(content)
      localStorage.setItem('token', content.token);
      localStorage.setItem('refresh-token', content.refreshToken);
      localStorage.setItem('name', content.name);
      localStorage.setItem('id', content.userId);
      displayUserLogin(content.name);
    })

}

export const displayUserLogin = (name: string) =>{
  const wrapperLogin = document.querySelector(".wrapper__login") as HTMLElement;
  const containerLogin = document.querySelector(".login__conteiner") as HTMLButtonElement;
  const loginName = document.querySelector(".autorization-name") as HTMLElement;

  wrapperLogin.style.display = 'none';
  containerLogin.style.display = 'none';
  loginName.innerHTML =`Hello, ${name}!`
}

