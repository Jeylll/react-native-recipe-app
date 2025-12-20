import {Image, Text, TextInput, View} from "react-native";
import {icons} from "@/constants/icons";

interface Props {
    placeholder: string;
    onPress?: () => void;
}

const SearchBar = ({onPress, placeholder}: Props) => {
    return (
        <View className="flex-row items-center bg-[#d8f4ad] rounded-full px-5 mr-2 mt-6 h-16 justify-center">
            <Image source={icons.search} className="size-5 " resizeMode="contain" />

            <TextInput
                onPress={onPress}
                placeholder={placeholder}
                value=""
                onChangeText={(text) => {}}
                placeholderTextColor="#000000"
                className="flex-1 ml-3 text-black"
            />
        </View>
    )
}

export default SearchBar;