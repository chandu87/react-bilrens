var React =require('react');
var { IndexLink, Link }= require('react-router');

var Nav = React.createClass({

    constructor() {
      super()
      this.state = {
        collapsed: true,
      };
    }

    toggleCollapse() {
      const collapsed = !this.state.collapsed;
      this.setState({collapsed});
    }

    render() {
      const { location } = this.props;
      const { collapsed } = this.state;
      const homeClass = location.pathname === "/" ? "active" : "";
      const pakketClass = location.pathname.match(/^\/pakket/) ? "active" : "";
      const contactClass = location.pathname.match(/^\/contact/) ? "active" : "";
      const priserClass = location.pathname.match(/^\/priser/) ? "active" : "";

      const navClass = collapsed ? "collapse" : "";

      return (
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
            <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                <li class={homeClass}>
                  <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
                </li>
                <li class={priserClass}>
                  <Link to="priser" onClick={this.toggleCollapse.bind(this)}>Priser</Link>
                </li>

                <li class={pakketClass}>
                  <Link to="pakket" onClick={this.toggleCollapse.bind(this)}>PakkeInfo</Link>
                </li>
                <li class={contactClass}>
                  <Link to="contact" onClick={this.toggleCollapse.bind(this)}>Kontakt</Link>
                </li>
                <li class={priserClass}>
                  <Link to="priser" onClick={this.toggleCollapse.bind(this)}>OnlineBooking</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }

});
module.exports=Nav;
