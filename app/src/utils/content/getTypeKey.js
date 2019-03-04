const getTypeKey = (type) => {
    if ('wheels' === type) { return type; }

    return type.slice(0, -1);
};

export default getTypeKey;
