 export function orderByProps(obj, order) {
    let orderedProps = [];
    let unorderedProps = [];

    for (let key in obj) {
        if (order.includes(key)) {
            orderedProps.push({ key, value: obj[key] });
        } else {
            unorderedProps.push({ key, value: obj[key] });
        }
    }

    orderedProps.sort((a, b) => order.indexOf(a.key) - order.indexOf(b.key));
    unorderedProps.sort((a, b) => a.key.localeCompare(b.key));

    return [...orderedProps, ...unorderedProps]
}

