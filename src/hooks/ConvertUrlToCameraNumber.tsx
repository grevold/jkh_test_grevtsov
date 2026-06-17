export function ConvertUrlToCameraNumber(url: string) {
    let result = url.split("cameras")[1].split("streaming")[0].replaceAll("/", "");
    return result;
}