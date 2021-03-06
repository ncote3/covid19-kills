export default async function callApi(path) {
    const c_path = 'http://206.189.237.46' + path;
    const response = await fetch(c_path);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
}
