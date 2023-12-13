import CoffeeBeanIcon from "./components/icons/CoffeeBeanIcon.svelte";
import { SubstringTypes } from "./enums"

export const coffeeData = [
    {
        name: "Pour Over",
        route: "pour",
        selectionLists: [
            {
                name: "Strength",
                levels: 
                {
                    gram_gram :
                    [
                        {
                            Title: "Light",
                            Description: "1:18",
                            Value: 18
                        },
                        {
                            Title: "Normal",
                            Description: "1:16",
                            Value: 16
                        },
                        {
                            Title: "Strong",
                            Description: "1:15",
                            Value: 15
                        }
                    ]
                },
                levelDescription:
                {
                    prestring: "1:",
                    poststring: "",
                    customButtonInfo: {
                        gram_gram: {
                            min: 2,
                            max: 25,
                            defaultCustomValue: 12,
                            prestring: "1:",
                            poststring: ""
                        }
                    },
                    buttons: []
                },
                defaultPicker: "gram_gram"
            },
            {
                name: "Size",
                levels: 
                {
                    water:
                        [
                            {
                                Title: "227ml",
                                Description: "Short",
                                Value: 227
                            },
                            {
                                Title: "320ml",
                                Description: "Tall",
                                Value: 320
                            },
                            {
                                Title: "424ml",
                                Description: "Grande",
                                Value: 424
                            }
                        ],
                        
                    coffee:
                        [
                            {
                                Title: "15g",
                                Description: "Short",
                                Value: 15
                            },
                            {
                                Title: "20g",
                                Description: "Medium",
                                Value: 20
                            },
                            {
                                Title: "30g",
                                Description: "Large",
                                Value: 30
                            }
                        ]
                },

                levelDescription:
                {
                    customButtonInfo: {
                        coffee: {
                            min: 2,
                            max:50,
                            defaultCustomValue: 35,
                            prestring: "",
                            poststring: "g"
                        },
                        water: {
                            min: 25,
                            max: 1000,
                            defaultCustomValue: 500,
                            prestring: "",
                            poststring: "ml"
                        }
                    },
                    buttons: ["water", "coffee"]
                },
                defaultPicker: "water"
            }
        ],
        operation: function (selectedStrengthLevel, selectedSizeLevel, selectionSizeType) {
            let [totalCoffeeAmount, totalWaterAmount] = [0, 0]
            if(selectionSizeType === "water") {
                totalWaterAmount = selectedSizeLevel.toFixed(1)
                totalCoffeeAmount = (totalWaterAmount / selectedStrengthLevel).toFixed(1);
            } else if(selectionSizeType === "coffee") {
                totalCoffeeAmount = selectedSizeLevel.toFixed(1)
                totalWaterAmount = (totalCoffeeAmount * selectedStrengthLevel).toFixed(1);
            }

            return [totalCoffeeAmount, totalWaterAmount]
        }
    },

    {
        name: "Vietnamese Coffee",
        route: "phin",
        selectionLists: [
            {
                name: "Strength",
                levels:
                {
                    gram_gram: 
                    [
                    {
                        Title: "Light",
                        Description: "1:7",
                        Value: 7
                    },
                    {
                        Title: "Normal",
                        Description: "1:8",
                        Value: 8
                    },
                    {
                        Title: "Strong",
                        Description: "1:9",
                        Value: 9
                    }
                ]
            },
                levelDescription:
                {
                    customButtonInfo: {
                        gram_gram: {
                            min: 2,
                            max:20,
                            defaultCustomValue: 10,
                            prestring: "1:",
                            poststring: ""
                        }
                    },
                    buttons: []
                },
                defaultPicker: "gram_gram"
           
            },
            {
                name: "Size",
                levels: {
                    coffee: [
                    {
                        Title: "Small",
                        Description: "12g",
                        Value: 12
                    },
                    {
                        Title: "Medium",
                        Description: "14g",
                        Value: 14
                    },
                    {
                        Title: "Large",
                        Description: "16g",
                        Value: 16
                    }
                ]},
                levelDescription:
                {
                    customButtonInfo: {
                        coffee: {
                            min: 1,
                            max:50,
                            defaultCustomValue: 18,
                            prestring: "",
                            poststring: "g"
                        }
                    },
                    buttons: []
                },
                defaultPicker: "coffee"
            }   
        ],
        operation: function (selectedStrengthLevel, selectedSizeLevel, selectionSizeType) {
            let [totalCoffeeAmount, totalWaterAmount] = [0, 0]
            if(selectionSizeType === "water") {
                totalWaterAmount = selectedSizeLevel
                totalCoffeeAmount = (totalWaterAmount / selectedStrengthLevel).toFixed(1);
            } else if(selectionSizeType === "coffee") {
                totalCoffeeAmount = selectedSizeLevel
                totalWaterAmount = (totalCoffeeAmount * selectedStrengthLevel).toFixed(1);
            }

            return [totalCoffeeAmount, totalWaterAmount]
        }
    },
    {
        name: "French Press",
        route: "press",
        selectionLists: [
            {
                name: "Strength",
                levels:{
                    gram_gram: [
                    {
                        Title: "Light",
                        Description: "1:18",
                        Value: 18
                    },
                    {
                        Title: "Normal",
                        Description: "1:17",
                        Value: 17
                    },
                    {
                        Title: "Strong",
                        Description: "1:15",
                        Value: 15
                    }
                ]},
                levelDescription:
                {
                    customButtonInfo: {
                        gram_gram: {
                            min: 2,
                            max:25,
                            defaultCustomValue: 12,
                            prestring: "1:",
                            poststring: ""
                        }
                    },
                    buttons: []
                },
                defaultPicker: "gram_gram"          
            },
            {
                name: "Size",
                levels: {
                    water: [
                    {
                        Title: "Small",
                        Description: "250ml",
                        Value: 250
                    },
                    {
                        Title: "Medium",
                        Description: "500ml",
                        Value: 500
                    },
                    {
                        Title: "Large",
                        Description: "800ml",
                        Value: 800
                    }
                ]},
                levelDescription:
                {
                    customButtonInfo: {
                        water: {
                            min: 100,
                            max: 2000,
                            defaultCustomValue: 1000,
                            prestring: "",
                            poststring: "ml"
                        }
                    },
                    buttons: []
                },
                defaultPicker: "water"
            }   
        ],
        operation: function (selectedStrengthLevel, selectedSizeLevel, selectionSizeType) {
            let [totalCoffeeAmount, totalWaterAmount] = [0, 0]
            if(selectionSizeType === "water") {
                totalWaterAmount = selectedSizeLevel
                totalCoffeeAmount = (totalWaterAmount / selectedStrengthLevel).toFixed(1);
            } else if(selectionSizeType === "coffee") {
                totalCoffeeAmount = selectedSizeLevel
                totalWaterAmount = (totalCoffeeAmount * selectedStrengthLevel).toFixed(1);
            }

            return [totalCoffeeAmount, totalWaterAmount]
        }
    },
]