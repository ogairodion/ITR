import { gsap } from "gsap";

const dropdowns = document.querySelectorAll('.dropdown');

if (dropdowns.length) {
    dropdowns.forEach((dropdown) => {
        const dropdownTop = dropdown.querySelector('.dropdown-top');
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        const dropdownItems = dropdown.querySelectorAll('.js-dropdown-content-item');
        let count = 0;
        let transformCount = 25;

        dropdownTop.addEventListener('click', () => {
            const video = dropdown.querySelector('video');

            dropdown.classList.toggle('open');

            if (dropdown.classList.contains('open')) {
                gsap.timeline()
                    .to(dropdownContent, {
                        height: 'auto',
                        opacity: 1,
                        duration: 0.8,
                        ease: "sine.out",
                    })

                video.play();
            } else {
                gsap.timeline()
                .to(dropdownContent, {
                    height: 0,
                    opacity: 0,
                    duration: 0.8,
                    ease: "sine.out",
                })

                video.pause();
            }
        });

        dropdownItems.forEach((contentItem) => {
            contentItem.style.transition = `all ${0.4}s ease-in-out`;
            contentItem.style.transform = `translateY(${transformCount}px)`;
            
            count += 0.2;
            transformCount+= 20;
        });
    });
}