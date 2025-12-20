// For api declaration
export const THEMEALDB_CONFIG = {
    BASE_URL: 'https://www.themealdb.com/api/json/v1/1',
    API_KEY: '1',
    headers: {
        'Content-Type': 'application/json',
    }
}

export const searchMeals = async ({ query = '' }: { query?: string }) => {
    if (!query.trim()) {
        const response = await fetch(
            `${THEMEALDB_CONFIG.BASE_URL}/random.php`
        );
        if (!response.ok) {
            throw new Error(`Failed to fetch recipes: ${response.statusText}`);
        }
        const data = await response.json();
        return data.meals || [];
    }

    const endpoint = `${THEMEALDB_CONFIG.BASE_URL}/search.php?s=${encodeURIComponent(query)}`;

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: THEMEALDB_CONFIG.headers,
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch recipes: ${response.statusText}`);
    }

    const data = await response.json();
    return data.meals || [];
}

export const getMealById = async (id: string) => {
    const endpoint = `${THEMEALDB_CONFIG.BASE_URL}/lookup.php?i=${id}`;

    const response = await fetch(endpoint);
    if (!response.ok) {
        throw new Error(`Failed to fetch meal details: ${response.statusText}`);
    }

    const data = await response.json();
    return data.meals?.[0] || null;
}

export const getRandomMeal = async () => {
    const endpoint = `${THEMEALDB_CONFIG.BASE_URL}/random.php`;

    const response = await fetch(endpoint);
    if (!response.ok) {
        throw new Error(`Failed to fetch random meal: ${response.statusText}`);
    }

    const data = await response.json();
    return data.meals?.[0] || null;
}

export const getAllMealsByFirstLetter = async (firstLetter: string) => {
    const endpoint = `${THEMEALDB_CONFIG.BASE_URL}/search.php?f=${firstLetter}`;

    const response = await fetch(endpoint);
    if(!response.ok){
        throw new Error(`Failed to fetch meals: ${response.statusText}`);
    }

    const data = await response.json();
    return data.meals || [];
}