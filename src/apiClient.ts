export interface Image {
    id: string;
    /**
     * Path to the large image.
     */
    path: string;
    /**
     * Path to the thumbnail image.
     * If not provided, the large image will be used.
     */
    thumbnail?: string;
}

/**
 * Get the list of images.
 *
 * In a real application, this would be an API call,
 * but for the sake of this example, we'll just return an array after a delay.
 */
export const getImages = async (): Promise<Image[]> => {
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    await sleep(1000);

    const result = [];

    for (let i = 1; i <= 10; i++) {
        const id = Math.floor(Math.random() * 400);
        result.push({
            id: id.toString(),
            path: `https://picsum.photos/id/${id}/1500`,
            thumbnail: `https://picsum.photos/id/${id}/100`,
        });
    }

    return result;
}
