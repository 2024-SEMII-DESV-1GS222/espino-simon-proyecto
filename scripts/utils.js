const capitalize = (name) => {
    return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
}

const sanitizeName = (name) => {
    return name
        .trim()
        .toLowerCase()
        .replace(/[^a-z\-]/g, '');
}

export {
    capitalize,
    loopEvolutions
}