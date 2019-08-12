function runAddFile() {
    const sampleFile = DriveApp.getFileById(PropertiesService.getScriptProperties().getProperty('SAMPLE_FILE_ID'));
    Logger.log(sampleFile.getName());
    // 指定したファイルをDriveのルートフォルダに追加。元のファルダにも属したまま。
    const addFileResult = DriveApp.addFile(sampleFile);
    Logger.log(addFileResult.getName());
}

function runAddFolder() {
    const sampleFolder = DriveApp.getFolderById(PropertiesService.getScriptProperties().getProperty('SAMPLE_FOLDER_ID'));
    Logger.log(sampleFolder.getName());

    // 指定したフォルダをDriveのルートフォルダに追加。元のファルダにも属したまま。
    const addFolderResult = DriveApp.addFolder(sampleFolder);
    Logger.log(addFolderResult.getName());
}

function runContinueFileIterator() {
    // continueFileIterator(continuationToken)
}

function runContinueFolderIterator() {
    // continueFolderIterator(continuationToken)
}

function runCreateFile1() {
    // createFile(blob)
}

function runCreateFile2() {
    // 新規テキストファイル作成。ルートに配置される。
    const createFileResult2 = DriveApp.createFile('Sample.txt', 'create file result A');
    Logger.log(createFileResult2.getName());
}

function runCreateFile3() {
    // MIMEタイプ指定で新規ファイル作成。ルートに配置される。
    const createFileResult3 = DriveApp.createFile('Sample.html', '<ul><li>A</li><li>B</li><li>C</li></ul>', 'text/html');
    Logger.log(createFileResult3.getName());
}

function runCreateFolder() {
    // 新規フォルダ作成。ルートに配置される。
    const createFolderResult = DriveApp.createFolder('CreatedFolder');
    Logger.log(createFolderResult.getName());
}

function runGetFileById() {
    const getFileByIdResult = DriveApp.getFileById(PropertiesService.getScriptProperties().getProperty('SAMPLE_FILE_ID'));
    Logger.log( getFileByIdResult.getName());
}

function runGetFiles() {
    for (const iterator = DriveApp.getFiles(); iterator.hasNext();) {
        const file = iterator.next();
        Logger.log(file.getName());
    }
}
