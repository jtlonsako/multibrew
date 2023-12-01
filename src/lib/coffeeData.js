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
                ],
                levelDescription:
                {
                    prestring: "1:",
                    poststring: "",
                    min:2,
                    max:25,
                    defaultCustomValue: 12
                }
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
                ],
                levelDescription:
                {
                    prestring: "",
                    poststring: "ml",
                    min:25,
                    max:2000,
                    defaultCustomValue: 500
                }
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
                ],
                levelDescription:
                {
                    prestring: "1:",
                    poststring: "",
                    min:2,
                    max:20,
                    defaultCustomValue: 5
                }            },
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
                ],
                levelDescription:
                {
                    prestring: "",
                    poststring: "g",
                    min:1,
                    max:50,
                    defaultCustomValue: 18
                }
            }   
        ],
        operation: "mult"
    },
    {
        name: "French Press",
        route: "press",
        selectionLists: [
            {
                name: "Strength",
                levels:[
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
                ],
                levelDescription:
                {
                    prestring: "1:",
                    poststring: "",
                    min:2,
                    max:25,
                    defaultCustomValue: 12
                }            },
            {
                name: "Size",
                levels: [
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
                ],
                levelDescription:
                {
                    prestring: "",
                    poststring: "ml",
                    min:100,
                    max:5000,
                    defaultCustomValue: 1000
                }
            }   
        ],
        operation: "div"
    },
]