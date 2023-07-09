const firstInput = document.querySelectorAll('form input')[0],
secondInput = document.querySelectorAll('form input')[1],
counter = document.getElementsByClassName('counter')[0],
name = document.getElementsByClassName('name')[0],
maxlength = firstInput.getAttribute('maxlength');

firstInput.onkeyup = () =>{
    counter.innerText = maxlength - firstInput.value.length;
};

secondInput.onkeyup = () =>{
    name.innerText = secondInput.value.length
}


const settingsIcon = document.getElementsByClassName('fas fa-cog')[0],
sidebar = document.querySelector('.settings'),
icon = document.getElementsByTagName('i')[0],
color1 = document.getElementsByClassName('color')[0],
color2 = document.getElementsByClassName('color')[1],
color3 = document.getElementsByClassName('color')[2],
color4 = document.getElementsByClassName('color')[3],
body = document.body,
h3 = document.querySelector('h3');

settingsIcon.addEventListener('click', ()=>{
    sidebar.classList.toggle('active');
    icon.classList.toggle('fa-close')
});



color1.addEventListener('click', ()=>{
    body.style.background = 'linear-gradient(to top, #e63946 0% , #e63946 100%)';
    icon.style.color = '#e63946';
    h3.style.color = '#e63946';
    localStorage.setItem('body.style.background', 'linear-gradient(to top, #e63946 0% , #e63946 100%)')
})


color2.addEventListener('click', ()=>{
    body.style.background = 'linear-gradient(to top, #56e2d7 0% , #56e2d7 100%)';
    icon.style.color = '#56e2d7';
    h3.style.color = '#56e2d7';
    localStorage.setItem('body.style.background', 'linear-gradient(to top, #56e2d7 0% , #56e2d7 100%)')
})
 



color3.addEventListener('click', ()=>{
    body.style.background = 'linear-gradient(to top, rgb(255, 217, 0) 0% , rgb(255, 217, 0) 100%)';
    icon.style.color = 'rgb(255, 217, 0)';
    h3.style.color = 'rgb(255, 217, 0)';
})


color4.addEventListener('click', ()=>{
    body.style.background = 'linear-gradient(to top, #333 0% , #333 100%)';
    icon.style.color = '#333';
    h3.style.color = '#333';
})


