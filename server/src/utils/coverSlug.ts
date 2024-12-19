export function createSlug(text: string) {
    text = text.toLowerCase();
    text = text.replace(/’|‘|“|”|„|—|–|•/g, '');
    text = text.replace(/\s+/g, '-');
    return text.replace(/^-+|-+$/g, '');
}
