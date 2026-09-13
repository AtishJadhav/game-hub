const getCroppedImageUrl = (url: string) => {
    const searchText = 'media/'
    const index = url.indexOf(searchText) + (searchText).length;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);

}

export default getCroppedImageUrl;