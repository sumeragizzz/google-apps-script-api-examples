function runAddFile() {
    const sampleFile = DriveApp.getFileById(PropertiesService.getScriptProperties().getProperty('SAMPLE_FILE_ID'));
    Logger.log(sampleFile.getName());
    // 指定したファイルをDriveのルートフォルダに追加。元のファルダにも属したまま。
    const result = DriveApp.addFile(sampleFile);
    Logger.log(result.getName());
}

function runAddFolder() {
    const sampleFolder = DriveApp.getFolderById(PropertiesService.getScriptProperties().getProperty('SAMPLE_FOLDER_ID'));
    Logger.log(sampleFolder.getName());

    // 指定したフォルダをDriveのルートフォルダに追加。元のファルダにも属したまま。
    const result = DriveApp.addFolder(sampleFolder);
    Logger.log(result.getName());
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
    const result = DriveApp.createFile('Sample.txt', 'create file');
    Logger.log(result.getName());
}

function runCreateFile3() {
    // MIMEタイプ指定で新規ファイル作成。ルートに配置される。
    const result = DriveApp.createFile('Sample.html', '<ul><li>A</li><li>B</li><li>C</li></ul>', 'text/html');
    Logger.log(result.getName());
}

function runCreateFolder() {
    // 新規フォルダ作成。ルートに配置される。
    const result = DriveApp.createFolder('CreatedFolder');
    Logger.log(result.getName());
}

function runGetFileById() {
    // 指定したIDのファイルを取得する。
    const result = DriveApp.getFileById(PropertiesService.getScriptProperties().getProperty('SAMPLE_FILE_ID'));
    Logger.log(result.getName());
}

function runGetFiles() {
    // Drive上の全ファイルを取得する。戻り値はFileIterator。
    for (const iterator = DriveApp.getFiles(); iterator.hasNext();) {
        const file = iterator.next();
        Logger.log(file.getName());
    }
}

function runGetFilesByName() {
    // 指定した名前のファイルを取得する。戻り値はFileIterator。
    for (const iterator = DriveApp.getFilesByName('SampleFile.gdoc'); iterator.hasNext();) {
        const file = iterator.next();
        Logger.log(file.getName());
    }
}

function runGetFilesByType() {
    // 指定したMIMEタイプのファイルを取得する。戻り値はFileIterator。
    for (const iterator = DriveApp.getFilesByType('application/vnd.google-apps.document'); iterator.hasNext();) {
        const file = iterator.next();
        Logger.log(file.getName());
    }
}

function runGetFolderById() {
    // 指定したIDのフォルダを取得する。
    const result = DriveApp.getFolderById(PropertiesService.getScriptProperties().getProperty('SAMPLE_FOLDER_ID'));
    Logger.log(result.getName());
}

function runGetFolders() {
    // Drive上の全フォルダを取得する。戻り値はFolderIterator。
    for (const iterator = DriveApp.getFolders(); iterator.hasNext();) {
        const folder = iterator.next();        
        Logger.log(folder.getName());
    }
}

function runGetFoldersByName() {
    // 指定した名前のフォルダを取得する。戻り値はFolderIterator。
    for (const iterator = DriveApp.getFoldersByName('Sample'); iterator.hasNext();) {
        const folder = iterator.next();        
        Logger.log(folder.getName());
    }
}

function runGetRootFolder() {
    // ルートフォルダを取得する。
    const result = DriveApp.getRootFolder();
    Logger.log(result.getName());
}

function runGetStorageLimit() {
    // 使用可能ストレージのbyte数を取得する。
    const result = DriveApp.getStorageLimit();
    Logger.log(Math.round(result / 1024) + 'KB');
}

function runGetStorageUsed() {
    // 使用済ストレージのbyte数を取得する。
    const result = DriveApp.getStorageUsed();
    Logger.log(Math.round(result / 1024) + 'KB');
}

function runGetTrashedFiles() {
    // ゴミ箱の全ファイルを取得する。戻り値はFileIterator。
    for (const iterator = DriveApp.getTrashedFiles(); iterator.hasNext();) {
        const file = iterator.next();
        Logger.log(file.getName());
    }
}

function runGetTrashedFolders() {
    // ゴミ箱の全フォルダを取得する。戻り値はFolderIterator。
    for (const iterator = DriveApp.getTrashedFolders(); iterator.hasNext();) {
        const folder = iterator.next();
        Logger.log(folder.getName());
    }
}

function runRemoveFile() {
    const file = DriveApp.createFile('Sample.txt', 'create file');
    Logger.log(file.getName());

    // 指定したファイルをルートフォルダから削除する。ファイル自体は削除しない。
    const result = DriveApp.removeFile(file);
    Logger.log(result.getName());
}

function runRemoveFolder() {
    const folder = DriveApp.createFolder('CreatedFolder');
    Logger.log(folder.getName());

    // 指定したフォルダをルートフォルダから削除する。フォルダ自体は削除しない。
    const result = DriveApp.removeFolder(folder);
    Logger.log(result.getName());
}
