import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from '../constants'

const Home = ({ navigation }) => {

    // Dummy Data

    const initialCurrentLocation = {
        streetName: "Chittagong",
        gps: {
            latitude: 91.7832,
            longitude: 22.3569
        }
    }

    const categoryData = [
        {
            id: 1,
            name: "Haier",
            icon: icons.haier,
        },
        {
            id: 2,
            name: "Gree",
            icon: icons.gree,
        },
        {
            id: 3,
            name: "Carrier",
            icon: icons.carrier_logo,
        },
        {
            id: 4,
            name: "LG",
            icon: icons.lg,
        },
        {
            id: 5,
            name: "Walton",
            icon: icons.walton,
        },
        {
            id: 6,
            name: "Samsung",
            icon: icons.samsung,
        },

    ]

    // price rating
    const expensive = 3

    const brandsData = [
        {
            id: 1,
            name: "Walton AC",
            rating: 4.8,
            categories: [5, 7],
            priceRating: expensive,
            photo: images.walton1,
            courier: {
                avatar: images.avatar_1,
                name: "walton"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Walton AC 1.5 Ton",
                    photo: images.walton1,
                    description: "Walton AC, Make Your Happiness",
                    price: 1000
                },
                {
                    menuId: 2,
                    name: "Walton AC 1.5 Ton",
                    photo: images.walton2,
                    description: "Walton AC, Make Your Happiness",
                    price: 900
                },
                {
                    menuId: 3,
                    name: "Walton AC 2 Ton",
                    photo: images.walton3,
                    description: "Walton AC, Make Your Happiness",
                    price: 1200
                },
            ]
        },
        {
            id: 2,
            name: "Gree AC",
            rating: 4.8,
            categories: [2, 4, 6],
            priceRating: expensive,
            photo: images.gree1,
            courier: {
                avatar: images.avatar_2,
                name: "gree"
            },
            menu: [
                {
                    menuId: 4,
                    name: "Gree AC 1.5 Ton",
                    photo: images.gree1,
                    description: "Gree AC, Cool Your Air",
                    price: 700
                },
                {
                    menuId: 5,
                    name: "Gree AC 2.5 Ton",
                    photo: images.gree2,
                    description: "Gree AC, Cool Your Air",
                    price: 1200
                },
                {
                    menuId: 6,
                    name: "Gree AC 2 Ton",
                    photo: images.gree1,
                    description: "Gree AC, Cool Your Air",
                    price: 1100
                }
            ]
        },
        {
            id: 3,
            name: "Carrier AC",
            rating: 4.8,
            categories: [3],
            priceRating: expensive,
            photo: images.carrier1,
            courier: {
                avatar: images.avatar_3,
                name: "Carrier"
            },
            menu: [
                {
                    menuId: 7,
                    name: "Carrier AC",
                    photo: images.carrier1,
                    description: "Carrier AC, Makes air perfect",
                    price: 950
                },
                {
                    menuId: 8,
                    name: "Carrier AC",
                    photo: images.carrier2,
                    description: "Carrier AC, Makes air perfect",
                    price: 1000
                }
            ]
        },
        {
            id: 4,
            name: "LG AC",
            rating: 4.8,
            categories: [8],
            priceRating: expensive,
            photo: images.lg1,
            courier: {
                avatar: images.avatar_4,
                name: "LG"
            },
            menu: [
                {
                    menuId: 9,
                    name: "LG AC 1.5 Ton",
                    photo: images.lg2,
                    description: "LG, Makes Life Visible",
                    price: 1100
                }
            ]
        },
        {
            id: 5,
            name: "Haier AC",
            rating: 4.8,
            categories: [1, 2],
            priceRating: expensive,
            photo: images.haier1,
            courier: {
                avatar: images.avatar_4,
                name: "Haier"
            },
            menu: [
                {
                    menuId: 10,
                    name: "Haier AC 1 Ton",
                    photo: images.haier2,
                    description: "Haier AC, Cool Your Hotness",
                    price: 750
                },
                {
                    menuId: 11,
                    name: "Haier AC 2 Ton",
                    photo: images.haier3,
                    description: "Haier AC, Cool Your Hotness",
                    price: 800
                },
                {
                    menuId: 12,
                    name: "Haier AC 1.5 Ton",
                    photo: images.haier2,
                    description: "Haier AC, Cool Your Hotness",
                    price: 1000
                },
                {
                    menuId: 13,
                    name: "Haier AC 2 Ton",
                    photo: images.haier1,
                    description: "Haier AC, Cool Your Hotness",
                    price: 950
                },

            ]
        },
        {

            id: 6,
            name: "Samsung AC",
            rating: 4.9,
            categories: [9, 10],
            priceRating: expensive,
            photo: images.samsung1,
            courier: {
                avatar: images.avatar_1,
                name: "Samsung"
            },
            menu: [
                {
                    menuId: 12,
                    name: "Samsung AC",
                    photo: images.samsung2,
                    description: "Top Lair Of Coolness",
                    price: 1300
                },
                {
                    menuId: 13,
                    name: "Samsung AC",
                    photo: images.samsung3,
                    description: "Top Lair Of Coolness",
                    price: 1200
                },
                {
                    menuId: 14,
                    name: "Samsung AC",
                    photo: images.samsung1,
                    description: "Top Lair Of Coolness",
                    price: 1100
                }
            ]

        },
        {

            id: 7,
            name: "sarawak_laksa",
            rating: 4.9,
            categories: [9, 10],
            priceRating: expensive,
            photo: images.sarawak_laksa,
            courier: {
                avatar: images.avatar_1,
                name: "sarawak_laksa"
            },
            menu: [
                {
                    menuId: 12,
                    name: "Samsung AC",
                    photo: images.samsung2,
                    description: "Top Lair Of Coolness",
                    price: 1300
                },
                {
                    menuId: 13,
                    name: "Samsung AC",
                    photo: images.samsung3,
                    description: "Top Lair Of Coolness",
                    price: 1200
                },
                {
                    menuId: 14,
                    name: "Samsung AC",
                    photo: images.samsung1,
                    description: "Top Lair Of Coolness",
                    price: 1100
                }
            ]

        }

    ]

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [brands, setbrands] = React.useState(brandsData)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)


    function onSelectCategory(category) {
        //filter brandsList
        let brandsListList = brandsData.filter(a => a.categories.includes(category.id))

        setbrands(brandsListList)

        setSelectedCategory(category)
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }

    function renderHeader() {
        return (
            <SafeAreaView >
                <View style={{ flexDirection: 'row', height: 50 }}>
                    <TouchableOpacity
                        style={{
                            width: 50,
                            paddingLeft: SIZES.padding * 2,
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            source={icons.nearby}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </TouchableOpacity>

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View
                            style={{
                                width: '70%',
                                height: "100%",
                                backgroundColor: COLORS.lightGray3,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: SIZES.radius
                            }}
                        >
                            <Text style={{ ...FONTS.h3 }}>{currentLocation.streetName}</Text>
                        </View>
                    </View>

                    <TouchableOpacity
                        style={{
                            width: 50,
                            paddingRight: SIZES.padding * 2,
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            source={icons.basket}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }

    function renderMainCategories() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>

                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                            ...FONTS.body5
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ padding: SIZES.padding * 2 }}>
                <Text style={{ ...FONTS.h1 }}>Top</Text>
                <Text style={{ ...FONTS.h1 }}>Brands</Text>

                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }

    function renderbrandsListList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2 }}
                onPress={() => navigation.navigate("brandsList", {
                    item,
                    currentLocation
                })}
            >
                {/* Image */}
                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />
                </View>

                {/* brandsList Info */}
                <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row'
                    }}
                >
                    {/* Rating */}
                    <Image
                        source={icons.star}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.primary,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

                    {/* Categories */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                        {
                            item.categories.map((categoryId) => {
                                return (
                                    <View
                                        style={{ flexDirection: 'row' }}
                                        key={categoryId}
                                    >
                                        <Text style={{ ...FONTS.body3 }}>{getCategoryNameById(categoryId)}</Text>
                                        <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>
                                    </View>
                                )
                            })
                        }

                        {/* Price */}
                        {
                            [1, 2, 3].map((priceRating) => (
                                <Text
                                    key={priceRating}
                                    style={{
                                        ...FONTS.body3,
                                        color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgray
                                    }}
                                >$</Text>
                            ))
                        }
                    </View>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                data={brands}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
            {renderbrandsListList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Home;