import {Image, Text, TouchableOpacity} from "react-native"
import {Link} from "expo-router";
import {Recipe} from "@/interfaces/interface";

const RecipeCard = ({idMeal, strMeal, strMealThumb}: Recipe) => {
    return (
        <Link href={`/recipes/${idMeal}`} asChild>
            <TouchableOpacity
                className="w-[160px] mr-4"
                style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 4,
                    elevation: 3,
                }}
            >
                <Image
                    source={{
                        uri: strMealThumb ?? "https://via.placeholder.com/300"
                    }}
                    className="w-full h-40 rounded-xl"
                    resizeMode="cover"
                />

                <Text
                    className="text-sm text-black font-bold mt-2"
                    numberOfLines={2} // Ensure text doesn't overflow
                >
                    {strMeal}
                </Text>
            </TouchableOpacity>
        </Link>
    )
}

export default RecipeCard;