$(document).ready(function() {
    function getUsers() {
        $.get('/getusers', function(data) {
            createTable('#table', data = JSON.parse(data))
        })
    }
    getUsers();

    function createTable(container, data) {
        let td0, td1, td2, td3;
        $(container).append('<table>')
        $('table').append('<caption>Table of users</caption>');
        $('table').append('<tr><td>№</td><td>Username</td><td>Password</td><td>Age</td></tr>');

        $('table').attr('class', 'my-table');
        $('tr').eq(0).attr('id', 'thead');

        $(data).each(function(index, val) {
            console.log(val, index);
            $('table').append('<tr></tr>')
            td0 = `<td> ${index+1} </td>`;
            td1 = `<td> ${ data[index].username } </td>`;
            td2 = `<td> ${ data[index].password} </td>`;
            td3 = `<td> ${ data[index].age } </td>`;
            $('tr').eq(index + 1).append(td0, td1, td2, td3);
        })

    }
})