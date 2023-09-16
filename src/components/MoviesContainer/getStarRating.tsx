export function getStarRating(rating: number): string {
    const maxRating = 10;
    const filledStars = Math.floor((rating / 10) * maxRating);
    const emptyStars = maxRating - filledStars;

    const starIcons = '★'.repeat(filledStars) + '☆'.repeat(emptyStars);

    return starIcons;
}