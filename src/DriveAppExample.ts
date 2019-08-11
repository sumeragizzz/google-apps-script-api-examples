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
}
