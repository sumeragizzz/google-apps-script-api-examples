function main() {
    const sampleFile = DriveApp.getFileById(PropertiesService.getScriptProperties().getProperty('SAMPLE_FILE_ID'));
    const sampleFolder = DriveApp.getFolderById(PropertiesService.getScriptProperties().getProperty('SAMPLE_FOLDER_ID'));
    Logger.log(sampleFile.getName());
    Logger.log(sampleFolder.getName());

    // 指定したファイルをDriveのルートフォルダに追加(元のファルダにも属したまま)
    const addFileResult = DriveApp.addFile(sampleFile);
    Logger.log(addFileResult.getName());

    // 指定したフォルダをDriveのルートフォルダに追加(元のファルダにも属したまま)
    const addFolderResult = DriveApp.addFolder(sampleFolder);
    Logger.log(addFolderResult.getName());

    // continueFileIterator(continuationToken)

    // continueFolderIterator(continuationToken)

    // createFile(blob)

    // 新規テキストファイル作成
    const createFileResult2 = DriveApp.createFile('Sample.txt', 'create file result A');
    Logger.log(createFileResult2.getName());

    // MIMEタイプ指定で新規ファイル作成
    const createFileResult3 = DriveApp.createFile('Sample.html', '<ul><li>A</li><li>B</li><li>C</li></ul>', 'text/html');
    Logger.log(createFileResult3.getName());
}
