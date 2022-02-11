const { readFile } = require('fs/promises');

const convertJSONToObj = async (filePath) => {
    if (!filePath) throw new Error('filePath parameter is missing');

    const bufferedData = await readFile(filePath);
    const parsedData = JSON.parse(bufferedData);

    return parsedData;
};

const formatDataForBulkInsert = (data) => {
    if (!data) throw new Error('data parameter is missing');

    const formattedData = data.map((obj) => Object.values(obj));

    return formattedData;
};

module.exports = {
    convertJSONToObj,
    formatDataForBulkInsert,
};
