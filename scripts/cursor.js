const cursor = document.querySelector('.cursor')
const cursorSmall = document.querySelector('.cursorSmall')

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " +(e.pageY - 9)+"px; left: "+ (e.pageX - 9) + "px;")
    cursorSmall.setAttribute("style", "top: " +(e.pageY - 2)+"px; left: "+ (e.pageX - 2) + "px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand")
    }, 200);
})