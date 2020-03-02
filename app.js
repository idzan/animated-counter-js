const counters = document.querySelectorAll('.counter');
const counterSpeed = 150;

counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target/counterSpeed;

        if (count < target) {
            counter.innerText = count + inc;
        } else {
            counter.innerText = target;
        }

    };

    updateCounter();
});