document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.wrap');
    const carouselItem = document.querySelectorAll('.wraps');
    let currentIdex = 0;

    function moveToNextSlide () {
        currentIdex = (currentIdex + 1) % carouselItem.length;
        carousel.style.transform = `translateX(-${currentIdex * 100}%)`;
    }

    setInterval(moveToNextSlide, 3000);

    const write = document.getElementById('heading');
    const written = document.getElementById('written');

    let writeArr = [
        'WELCOME TO ELIVYA WEB ENTERPRISE'
    ];
    let writtenArr = [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dignissimos ipsum magnam nulla accusamus numquam soluta nostrum ab ad nihil reiciendis maxime tenetur vitae perspiciatis sunt, consectetur porro quaerat fuga.'
    ];

    let charIndex = 0;
    let textIndex = 0;
    let isDeleting = false;
    let delay = 150;

    function type() {
        let currentText = writeArr[textIndex];
        if (isDeleting) {
            write.innerHTML = currentText.substring(0, charIndex--);
            delay = 50;
            if(charIndex < 0) {
                (textIndex + 1) % writeArr.length;
                isDeleting = false;
                delay = 500;
            }
        } else {
            write.innerHTML = currentText.substring(0, charIndex++);
            delay = 100;
            if (charIndex === (currentText.length + 1)) {
                isDeleting = true;
                delay = 6000;
            }
        }
        setTimeout(type, delay);
    }
    type();

    function typer() {
        let currentText = writtenArr[textIndex];
        if (isDeleting) {
            written.innerHTML = currentText.substring(0, charIndex--);
            delay = 50;
            if(charIndex < 0) {
                (textIndex + 1) % writtenArr.length;
                isDeleting = false;
                delay = 500;
            }
        } else {
            written.innerHTML = currentText.substring(0, charIndex++);
            delay = 100;
            if (charIndex === (currentText.length + 1)) {
                isDeleting = true;
                delay = 5000;
            }
        }
        setTimeout(typer, delay);
    }
    typer();
});

