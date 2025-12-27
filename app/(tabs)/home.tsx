import { useState, useEffect } from 'react';
import { Modal, ActivityIndicator, ScrollView, Text, View, FlatList } from "react-native";
import { useRouter } from "expo-router";
import SearchBar from "@/components/SearchBar";
import useFetch from "@/services/useFetch";
import { getAllMealsByFirstLetter } from "@/services/api";
import RecipeCard from "@/components/RecipeCard";

export default function Home() {
    const router = useRouter();

    const {
        data: meals,
        loading: recipeLoading,
        error: recipesError
    } = useFetch(() => getAllMealsByFirstLetter("a"));

    // // State to control modal visibility
    // const [showLoading, setShowLoading] = useState(false);
    //
    // // Fix the glimpse issue - delay showing main content
    // useEffect(() => {
    //     if (recipeLoading) {
    //         setShowLoading(true);
    //     } else {
    //         // Delay hiding the loading to avoid flicker
    //         const timer = setTimeout(() => {
    //             setShowLoading(false);
    //         }, 300);
    //         return () => clearTimeout(timer);
    //     }
    // }, [recipeLoading]);

    const limitedMeals = meals?.slice(0, 5) || [];

    return (
        <View className="flex-1 bg-[#f7f6d3]">
            {/*<Modal*/}
            {/*    visible={showLoading}*/}
            {/*    transparent={false}*/}
            {/*    animationType="fade"*/}
            {/*    statusBarTranslucent={true}*/}
            {/*>*/}
            {/*    <View className="flex-1 bg-[#f7f6d3] justify-center items-center px-6">*/}
            {/*        <Text className="text-6xl mb-8">🍳</Text>*/}

            {/*        <Text className="text-3xl text-gray-800 font-bold mb-4 text-center">*/}
            {/*            Recipe Finder*/}
            {/*        </Text>*/}

            {/*        <Text className="text-lg text-gray-600 mb-10 text-center">*/}
            {/*            Loading delicious recipes...*/}
            {/*        </Text>*/}

            {/*        <ActivityIndicator size="large" color="#4A90E2" />*/}

            {/*        <View className="flex-row mt-6">*/}
            {/*            {['.', '..', '...'].map((dot, index) => (*/}
            {/*                <Text*/}
            {/*                    key={index}*/}
            {/*                    className="text-2xl text-gray-700 font-bold"*/}
            {/*                    style={{*/}
            {/*                        opacity: (index + 1) * 0.3,*/}
            {/*                        marginHorizontal: 2*/}
            {/*                    }}*/}
            {/*                >*/}
            {/*                    {dot}*/}
            {/*                </Text>*/}
            {/*            ))}*/}
            {/*        </View>*/}

            {/*        <View className="mt-16 px-6">*/}
            {/*            <Text className="text-gray-500 text-center italic text-sm">*/}
            {/*                "Cooking is like love. It should be entered into with abandon or not at all."*/}
            {/*            </Text>*/}
            {/*        </View>*/}
            {/*    </View>*/}
            {/*</Modal>*/}

            {/*{!recipeLoading && meals && (*/}
            <ScrollView
                className="flex-1 px-5"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    minHeight: "100%",
                    paddingBottom: 10
                }}
            >
                <View className="flex mt-10 ml-2">
                    <SearchBar
                        onPress={() => router.push("/search")}
                        placeholder="Search a recipe"
                    />

                    <View className="mt-8">
                        <Text className="text-2xl text-gray-800 font-bold mb-4">
                            Latest Recipes
                        </Text>

                        {limitedMeals && limitedMeals.length > 0 ? (
                            <FlatList
                                data={limitedMeals}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item, index) => `${item.idMeal}-${index}`}
                                renderItem={({ item }) => (
                                    <RecipeCard {...item} />
                                )}
                                ItemSeparatorComponent={() => <View style={{width: 8}} />}
                                contentContainerStyle={{
                                    paddingRight: 20,
                                }}
                                className="mt-2"
                            />
                        ) : (
                            <View className="bg-white p-6 rounded-xl">
                                <Text className="text-gray-600 text-center">
                                    No recipes found
                                </Text>
                            </View>
                        )}
                    </View>

                    <View className="mt-10">
                        <Text className="text-2xl text-gray-800 font-bold mb-4">
                            Popular Categories
                        </Text>
                        <View className="flex-row flex-wrap">
                            {['Beef', 'Chicken', 'Dessert', 'Vegetarian'].map((category) => (
                                <View
                                    key={category}
                                    className="bg-white mr-3 mb-3 px-4 py-2 rounded-full shadow-sm"
                                >
                                    <Text className="text-gray-700">{category}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/*Show error if any pritty pritty bebu*/}
            {recipesError && !recipeLoading && (
                <View className="flex-1 justify-center items-center p-8">
                    <Text className="text-5xl mb-6">😟</Text>
                    <Text className="text-red-500 text-center text-lg font-bold mb-4">
                        Oops! Something went wrong
                    </Text>
                    <Text className="text-gray-600 text-center mb-8">
                        {recipesError.message}
                    </Text>
                </View>
            )}
        </View>
    );
}