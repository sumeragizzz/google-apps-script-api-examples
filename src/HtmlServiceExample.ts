function doGet(e:GoogleAppsScript.Events.AppsScriptHttpRequestEvent) {
    return HtmlService.createTemplateFromFile('index').evaluate();
    // return HtmlService.createHtmlOutputFromFile('index');
}

function doPost(e:GoogleAppsScript.Events.AppsScriptHttpRequestEvent) {
    const parameter: any = e.parameter;

    const template = HtmlService.createTemplateFromFile('index');
    template.keyResult = parameter.key;
    template.valueResult = parameter.value;

    return template.evaluate();
}
