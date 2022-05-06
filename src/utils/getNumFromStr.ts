export const getNumFromStr = (string: string) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return string?.match(/\d+/)[0];
};
