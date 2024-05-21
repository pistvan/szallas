import { Image } from "@/apiClient";

export const buildCarouselImage = (image: Image): HTMLElement => {
    const img = document.createElement('div');
    img.className = 'gallery__carousel__item__image';
    img.style.setProperty('--url', `url(${image.thumbnail ?? image.path})`);

    const item = document.createElement('div');
    item.className = 'gallery__carousel__item';
    item.appendChild(img);

    return item;
}
