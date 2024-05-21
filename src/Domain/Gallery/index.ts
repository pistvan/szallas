import { Image } from "@/apiClient";
import * as Carousel from './_carousel';

const MainClassName = 'gallery__main';
const MainImageClassName = 'gallery__main__image';

export class Gallery {
    protected constructor(
        protected container: HTMLElement,
        protected images: Image[],
    ) {
        this.build();
    }

    static create(container: HTMLElement, images: Image[]): Gallery {
        return new this(container, images);
    }

    protected build() {
        const fragment = document.createDocumentFragment();
        const gallery = document.createElement('div');
        gallery.className = 'gallery';
        fragment.appendChild(gallery);

        const main = this.buildMainImage(this.images[0]);
        gallery.appendChild(main);

        const carousel = this.buildCarousel(this.images);
        gallery.appendChild(carousel);

        this.container.innerHTML = '';

        this.container.appendChild(fragment);
    }

    protected buildMainImage(image: Image): HTMLElement {
        // Build the main image container
        const main = document.createElement('div');
        main.className = MainClassName;

        const img = document.createElement('div');
        img.className = MainImageClassName;
        img.style.setProperty('--url', `url(${image.path})`);

        main.appendChild(img);

        return main;
    }

    protected buildCarousel(images: Image[]): HTMLElement {
        const carousel = document.createElement('div');
        carousel.className = 'gallery__carousel';

        images.forEach(image => {
            const item = Carousel.buildCarouselImage(image);
            item.addEventListener('click', () => this.setActiveImage(image.id));

            carousel.appendChild(item);
        });

        return carousel;
    }

    protected setActiveImage(id: string) {
        const imageToActive = this.images.find(image => image.id === id);

        if (!imageToActive) {
            throw new Error(`Image not found with id ${id}`);
        }

        const mainImage = this.buildMainImage(imageToActive);

        const m = this.container.querySelector(`.${MainClassName}`)!;

        m.replaceWith(mainImage);
    }
}
