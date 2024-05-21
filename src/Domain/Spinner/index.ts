export class Spinner {
    protected constructor(
        protected container: HTMLElement,
    ) {
        this.build();
    }

    static create(container: HTMLElement): Spinner {
        return new this(container);
    }

    protected build() {
        const spinner = document.createElement('div');
        spinner.className = 'spinner';

        const spinnerInner = document.createElement('div');
        spinnerInner.className = 'spinner__inner';

        spinner.appendChild(spinnerInner);

        this.container.innerHTML = '';

        this.container.appendChild(spinner);
    }
}
