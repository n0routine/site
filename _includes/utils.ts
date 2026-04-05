// Utilities

export function ListJoin<T, U>(l: Array<T>, j: U) {
    const r = [];
    for (const e of l) {
        r.push(e);
        r.push(j);
    }
    r.pop();
    return r;
}

export function DateFmt(date: Date) {
    const options: Intl.DateTimeFormatOptions = {
        hour12: false,
        timeZone: "UTC",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
    };
    const partsf = Intl.DateTimeFormat(undefined, options).formatToParts(date);
    const parts = Object.fromEntries(Array.from(partsf.values()).map(v => ([v.type, v.value])));
    return `${parts.year}/${parts.month}/${parts.day}`;
}

export function LogBrokenLinks(brokenLinks: Map<string, Set<string>>) {
    if (brokenLinks.size > 0) {
        console.log(`ERROR broken links!`);
        for (const [k, v] of brokenLinks) {
            for (const ve of v) {
                console.log(` !! ${k} <- ${ve}`)
            }
        }
    }
}
