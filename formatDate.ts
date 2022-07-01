export default function formatDate({ timesTamp }: { timesTamp: number }): string {
    let date: Date;
    let Y: number;
    let M: string | number;
    let D: string | number;
    let h: string | number;
    let m: string | number;
    let s: string | number;
    date = new Date(timesTamp * 1000);
    Y = date.getFullYear();
    M = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    D = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    h = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    m = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    s = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    return `${Y}-${M}-${D} ${h}:${m}:${s}`
}
