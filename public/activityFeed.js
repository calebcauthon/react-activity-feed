window.ActivityFeedComponent = function() {
  return React.createClass({
    getInitialState: function() {
      return {
        activities: this.props.items
      };
    },
    render: function() {
      var list = (
        <div>
          <h1>Activity Feed</h1>
          <ul>
            {this.state.activities.map(function(activity) {
              return <li>{activity}</li>;
            })}
          </ul>
        </div>
      );

      return <div>{list}</div>;
    }
  });
}