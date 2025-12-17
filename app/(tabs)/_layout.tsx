import {Image, Text, View, ImageBackground} from 'react-native';
import {Tabs} from "expo-router";
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";

const TabIcon = ({focused, icon, title}: any) => {
    if (focused){
        return (
            <ImageBackground
                source={images.highlight}
                className="flex-row items-center justify-center rounded-full overflow-hidden px-4 py-2 w-auto mt-4 min-h-16"
                style={{ minWidth: 92, maxWidth: 100 }}
            >
                <Image source={icon} className="size-5" />
                <Text className="text-black font-semibold">{title}</Text>
            </ImageBackground>
        )
    }

    return (
        <View className="justify-center items-center mt-4">
            <Image source={icon} className="size-5"/>
        </View>
    )
}

const _Layout = () => {
    return (
        <Tabs
            screenOptions = {{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: "25%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                },
                tabBarStyle: {
                    backgroundColor: "#ffe4ef",
                    borderRadius: 23,
                    marginHorizontal: 20,
                    marginBottom: 36,
                    height: 50,
                    position: "absolute",
                    overflow: "hidden",
                    paddingHorizontal: 8,
                    borderColor: 'transparent',
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.home}
                            title="Home"
                        />
                    )
                }}
            />

            <Tabs.Screen
                name="search"
                options={{
                    title: "Search",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.search}
                            title="Search"
                        />
                    )
                }}
            />

            <Tabs.Screen
                name="saved"
                options={{
                    title: "Saved",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.saved}
                            title="Saved"
                        />
                    )
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.profile}
                            title="Profile"
                        />
                    )
                }}
            />
        </Tabs>
    );
}

export default _Layout;