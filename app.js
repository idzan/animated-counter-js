const counters = document.querySelectorAll('.counter');
const counterSpeed = 500;

counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target/counterSpeed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }

    };

    updateCounter();
});