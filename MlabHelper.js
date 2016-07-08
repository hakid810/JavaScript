

var MlabHelper = function (apikey) {
        var baseURL = "https://api.mlab.com/api/1"; //베이스 url. api 문서에도 나와있음.
        var _apikey = apikey;
        var _dbname = '';
        var _colname = '';


        this.setDbname = function (dbname) {
            _dbname = dbname;
        };
    this.setColname = function (colname) {
        _colname = colname;
    };

    this.searchMlab = function (query, callback) {
        var sendURL = baseURL + "/databases/" + _dbname + "/collections/" + _colname 
            + "?apiKey=" + _apikey
            + (query == '' ? '' : "&q=" + query);


        $.ajax({
            url: sendURL,
            type: "GET",
            async: true,
            timeout: 3000000,
            success: callback            ,
            error: function (xhr, status, err) {
                alert(err);
            }
        });
    };

    this.insertMlab = function (dataObj, callback) {
        var sendURL = baseURL + "/databases/" + _dbname + "/collections/" + _colname + "?apiKey=" + _apikey;

        $.ajax({
            url: sendURL,
            type: "POST",
            data: JSON.stringify(dataObj),
            contentType: "application/json",
            success: callback            ,
            error: function (xhr, status, err) {
                alert(err);
            }
        });
    };

    this.updateMlab = function (id, dataObj, callback) {
        var sendURL = baseURL
            + "/databases/" + _dbname
            + "/collections/" + _colname
            + "/"+id
            + "?apiKey=" + _apikey;

        $.ajax({
            url: sendURL,
            type: "PUT",
            data: JSON.stringify(dataObj),
            contentType: "application/json",
            success: callback            ,
            error: function (xhr, status, err) {
                alert(err);
            }
        });
    }

    this.deleteMlab = function (id, callback) {
        var sendURL = baseURL
            + "/databases/" + _dbname
            + "/collections/" + _colname
            + "/"+id
            + "?apiKey=" + _apikey;

        $.ajax({
            url: sendURL,
            type: "DELETE",
            async: true,
            timeout: 3000000,
            success: callback            ,
            error: function (xhr, status, err) {
                alert(err);
            }
        });
    }

};