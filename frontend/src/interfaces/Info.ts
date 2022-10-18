export default interface IInfo {
    [key: string]: number | null | string | undefined | IInfo[]
    countView: number,
    countPlay: number,
    countSend: number,
    countOrder: number,
    countPay: number,
    parentId: number,
    categoryId: number,
    nameId: null | number,
    id: number,
    title: string,
    viewSend: number,
    viewPay: number,
    children?: IInfo[]
}
