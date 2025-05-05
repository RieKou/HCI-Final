const allstars = document.querySelectorAll('.Rcontainer');

allstars.forEach(container => {
    const stars = container.querySelectorAll('.star');

    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            stars.forEach((s, i) => {
                if (i <= index){
                    s.textContent = '★';
                } else {
                    s.textContent = '☆'; 
                }
            })
        })
    })
})