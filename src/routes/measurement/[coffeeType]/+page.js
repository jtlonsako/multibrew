import { coffeeData } from "$lib/coffeeData";

export function load({ params }) {
    let brewData = coffeeData.find((brewMethod) => brewMethod.route == params.coffeeType)
    return {
        brewData: {
            name: brewData?.name,
            route: brewData?.route,
            selectionLists: brewData?.selectionLists,
            operation: brewData?.operation
        }
    }
}