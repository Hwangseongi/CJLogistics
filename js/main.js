let links = document.querySelectorAll('a[href="#"]');
links.forEach((link, idx) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});
/* a링크 막기------------- */

/* const con4 = () => {
    let network = getAll('.main .golbal-wrap .network dl dd .num');
    let networkCon = get('.main .golbal-wrap .network');
    let start = 0,
        end = 0,
        speed = 100,
        current = 0,
        step = 0;

    window.addEventListener('scroll', (e) => {
        let scroll = e.currentTarget.scrollY;

        if (scroll >= 3200) {
            network.forEach((network, index) => {
                const countUp = () => {
                    end = Number(network.dataset.num);
                    current = Number(network.textContent.replace(/,/g, ''));
                    step = end / speed;

                    if (current < end) {
                        current = current + step;
                        network.textContent = new Intl.NumberFormat().format(current);
                        setTimeout(countUp, 20);
                    } else {
                        network.textContent = new Intl.NumberFormat().format(end);
                    }
                };
                countUp();
            });
        }
    });
}; */

const con4 = () => {
    const network = document.querySelectorAll('.main .golbal-wrap .network dl dd .num');
    const networkCon = document.querySelector('.main .golbal-wrap .network');
    const speed = 50;

    const countUp = (element, end) => {
        let current = 0;
        const step = end / speed;

        const updateNumber = () => {
            current += step;
            if (current < end) {
                element.textContent = Math.floor(current);
                setTimeout(updateNumber, 20);
            } else {
                element.textContent = end;
            }
        };

        updateNumber();
    };

    window.addEventListener('scroll', () => {
        const scroll = window.scrollY;

        if (scroll >= 3200 && scroll <= 3300) {
            network.forEach((element) => {
                const end = parseInt(element.dataset.num);
                countUp(element, end);
            });
        }
    });
};

con4();

/* //con4 global----------------- */

const familyBtn = document.querySelector('#family-btn');
const familyWrap = document.querySelector('.family-wrap');

familyBtn.addEventListener('click', () => {
    familyWrap.classList.toggle('on');
    familyBtn.classList.toggle('on');
});

document.addEventListener('click', (e) => {
    if (!familyWrap.contains(e.target) && !familyBtn.contains(e.target)) {
        familyWrap.classList.remove('on');
        familyBtn.classList.remove('on');
    }
});
