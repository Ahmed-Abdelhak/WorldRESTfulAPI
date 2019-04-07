var CountryRow = React.createClass({

    render: function () {
        return (
            <tr>
                <td>{this.props.item.id}</td>
                <td>{this.props.item.name}</td>
                //<td>{this.props.item.City}</td>
            </tr>

        );
    }
});

var CountryTable = React.createClass({

    getInitialState: function () {

        return {
            result: []
        }
    },
    componentWillMount: function () {

        var xhr = new XMLHttpRequest();
        xhr.open('get', this.props.url, true);
        xhr.onload = function () {
            var response = JSON.parse(xhr.responseText);

            this.setState({ result: response });

        }.bind(this);
        xhr.send();
    },
    render: function () {
        var rows = [];
        this.state.result.forEach(function (item) {
            rows.push(<CountryRow key={item.Id} item={item} />);
        });
        return (<table className="table">
                    <thead>
                    <tr>
                        <th>CountryID</th>
                        <th>Name</th>
                        <th>City</th>
                        
                    </tr>
                    </thead>

                    <tbody>
                    {rows}
                    </tbody>

                </table>);
    }

});

ReactDOM.render(<CountryTable url="/api/Countries" />,
    document.getElementById('grid'))

 


