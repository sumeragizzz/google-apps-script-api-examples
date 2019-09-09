function runAppendRow() {
    const sampleSpreadsheetId: string = PropertiesService.getScriptProperties().getProperty('SAMPLE_SPREADSHEET_ID')
    const book: GoogleAppsScript.Spreadsheet.Spreadsheet = SpreadsheetApp.openById(sampleSpreadsheetId)
    const sheet: GoogleAppsScript.Spreadsheet.Sheet = book.getSheets()[0]
    sheet.appendRow([new Date(), 'AAA', 100])
}
