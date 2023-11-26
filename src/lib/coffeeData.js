import { SubstringTypes } from "./enums"

export const coffeeData = [
    {
        name: "Pour Over",
        route: "pour",
        selectionLists: [
            {
                name: "Strength",
                levels: [
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
            {
                name: "Size",
                levels: [
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
                ]
            }
        ],
        operation: "div"
    },

    {
        name: "Vietnamese Coffee",
        route: "phin",
        selectionLists: [
            {
                name: "Strength",
                levels:[

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
            {
                name: "Size",
                levels: [
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
                ]
            }   
        ],
        operation: "mult"
    },
]