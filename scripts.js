const cursor = document.querySelector('.cursor');

window.addEventListener('scroll', function () {
    let nav = document.querySelector('nav');
    let windowPosition = window.scrollY > 0;
    nav.classList.toggle('scrolling-active', windowPosition);
    cursor.classList.toggle('cursor-off', windowPosition);
    document.querySelector('body').classList.toggle('pointer', windowPosition);
})

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})



