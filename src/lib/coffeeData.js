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
                        Value: 230
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
                levels:{
                    "Light": 7,
                    "Normal": 8,
                    "Strong": 9
                },
                keyNaming: true,
                addSubstring: SubstringTypes.Secondary,
                preString: "1:",
                postString: ""
            },
            {
                name: "Size",
                levels: {
                    "Small": 12,
                    "Medium": 14,
                    "Large": 16
                },
                keyNaming: false,
                addSubstring: SubstringTypes.Primary,
                preString: "",
                postString: "g"
            }   
        ],
        operation: "mult"
    },
]