var fs = require('fs');
var XLSX = require('xlsx');
var jsonfile = require('jsonfile')

function systemPath() {
    return process.cwd().split("\\bin")[0].trim()
}

function setUp() {
    if (!fs.existsSync(systemPath() + '/e2e/input/json')) {    
        fs.mkdirSync(systemPath() + '/e2e/input/json');
    }

        var moduleNames = []
        var workbook = XLSX.readFile(systemPath() + '/e2e/input/Testsuite.xlsx');
        var sheet_name_list = workbook.SheetNames;
        sheet_name_list.forEach(function (sName) {
            moduleNames.push(sName)
            var moduleObj = XLSX.utils.sheet_to_json(workbook.Sheets[sName])
            var obj = { Module: moduleObj }
            jsonfile.writeFileSync(systemPath() + '/e2e/input/json' + "/" + sName + ".json", obj);
        })
        let specs;
        moduleNames.map((mod) => {
            var filePath = systemPath() + '/e2e/input/json' + "/" + mod + ".json"
            var jsonObj = JSON.parse(fs.readFileSync(filePath).toString());
            var filteredData = jsonObj.Module.filter((obj) => obj.Flag==='Yes');
            specs = filteredData.map((spec) => spec.FeatureName);
        })
        return specs;
}

module.exports = {setUp};