import logo from '../LOGO.png';

export const Header = () => {
    return (
        <section className="home-header">
          <div className="header-left">
            <div className="logo">
              <img src={logo} alt="Logo"/>
            </div>
          </div>
            <div className="header-right">
              <a href="">UNMET NEED</a>
              <a href="">MECHANISM OF DISEASE</a>
            </div>
        </section>
    )
}

export default Header