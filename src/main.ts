import './main.scss';
import { Gallery } from './Domain/Gallery';
import { Spinner } from '@/Domain/Spinner';
import * as ApiClient from './apiClient';

const AppElement = document.getElementById('app')!;

Spinner.create(AppElement);

ApiClient.getImages().then((images) => {
    Gallery.create(AppElement, images);
});
