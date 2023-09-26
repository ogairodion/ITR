import { gsap } from "gsap";

const dropdowns = document.querySelectorAll('.dropdown');

if (dropdowns.length) {
    dropdowns.forEach((dropdown, index) => {
        const dropdownTop = dropdown.querySelector('.dropdown-top');
        const dropdownItems = dropdown.querySelectorAll('.js-dropdown-content-item');
        let count = 0;
        let transformCount = 25;

        dropdown.dataset.id = index;

        dropdownTop.addEventListener('click', () => {
            dropdownOpen(dropdown.dataset.id);
        });

        dropdownItems.forEach((contentItem) => {
            contentItem.style.transition = `all ${0.4}s ease-in-out`;
            contentItem.style.transform = `translateY(${transformCount}px)`;
            
            count += 0.2;
            transformCount+= 20;
        });
    });

    function dropdownOpen(id) {
        dropdowns.forEach((dropdown, index) => {
            const dropdownContent = dropdown.querySelector('.dropdown-content');
            const video = dropdown.querySelector('video');

            if (id == index) {
                dropdown.classList.add('open');

                gsap.timeline()
                    .to(dropdownContent, {
                        height: 'auto',
                        opacity: 1,
                        duration: 0.8,
                        ease: "sine.out",
                    })

                video.play();
            } else {
                dropdown.classList.add('remove');
                
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
    }
}