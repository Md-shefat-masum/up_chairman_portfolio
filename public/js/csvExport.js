
/**
 * 
 ```js
    csvExport = {
        file_name: "name.csv",
        columns: ['id','name'],
        rows: [
            [1, 'aaa'],
            [2, 'bbb'],
            [3, "ccc"],
        ],
        //  1, "aaaa" 
            2, "bbb",
            3, ""cccc""
        exportFile: ()=>export csv file,
    }
 ```
 */
let csvExport = {
    file_name: "data",
    columns: [],
    rows: [],
    delimeter: ',',

    setFileName: function(file_name){
        this.file_name = file_name;
        return this;
    },
    setColumns: function(columns = []){
        this.columns = columns;
        return this;
    },
    addRows: function(rows = []){
        this.rows = [...rows];
        return this;
    },
    escapeCell: function (cellData) {
        if (typeof cellData === 'string') {
            return '"' + cellData.replace(/\"/g, '""') + '"'; // ""asdfasdf""
        }
        return cellData;
    },
    getRowData: function (row) {
        return row.map(this.escapeCell).join(this._Delimeter);
    },
    exportFile: function () {
        var dataArray = [];
        var _this = this;
        if (this.columns && this.columns.length > 0) {
            dataArray.push(this.getRowData(this.columns));
        }
        this.rows.forEach(function (row) {
            dataArray.push(_this.getRowData(row));
        });
        var csvContent = dataArray.join("\r\n");

     
        if (window.navigator.msSaveOrOpenBlob) {
            var blob = new Blob([csvContent]);
            window.navigator.msSaveOrOpenBlob(blob, this.file_name);
        }
        else {
            var charBom = "\uFEFF";
            var encodedData = encodeURIComponent(csvContent);
            var content = "data:text/csv;charset=utf-8," + charBom + encodedData;
            var link = document.createElement("a");
            link.setAttribute("href", content);
            link.setAttribute("download", this.file_name);
            document.body.appendChild(link);
            link.click();
        }
    },
}