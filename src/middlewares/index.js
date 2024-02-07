export const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);
}

// export const enumerated = (store) => (next) => (action) => {
//     const counted = action.payload.map((pokemon, i) => ({
//         ...pokemon,
//         name: `${[i + 1]}. ${pokemon.name}`
//     }))
//     const updatedAction = {
//         ...action,
//         action: { ...action, payload: counted }
//     }
//     next(updatedAction);
// }