export const capitalizeName = (name) => {
    const letter = name.slice(0, 1)
    return letter.toUpperCase() + name.slice(1)
}