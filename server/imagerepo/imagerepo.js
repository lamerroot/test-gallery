class ImageRepository {
    imageList = [];
    
    constructor() {}

    getImages() {
        return this.imageList.map(function (img) {
            return {
                id: img.id,
                title: img.title,
                url: img.url
            };
        });
    }

    getImageDetails(imageId) {
        let image = this.imageList.find(img => img.id === imageId);

        return image ? { 
            id: image.id,
            title: image.title, 
            url: image.url,
            comments: image.comments
        } : null;
    }

    addComment(imageId, comment) {
        let image = this.imageList.find(img => img.id === imageId);

        return !!(image && image.comments.push(comment));
    }
}

const imageRepo = new ImageRepository();

module.exports = imageRepo;
