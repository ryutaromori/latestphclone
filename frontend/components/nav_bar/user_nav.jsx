import React from 'react';

class UserNav extends React.Component {
  constructor(props) {
    super(props);
    this.addProduct = this.addProduct.bind(this);
    this.showNotificaitons = this.showNotificaitons.bind(this);
    this.showUserMenu = this.showUserMenu.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
  }

  addProduct() {
    console.log('clicked Add Product');
  }

  showNotificaitons() {
    console.log('cliked Show Notifications');
  }

  showUserMenu() {
    console.log('clicked Show User Menu');
  }

  showDropdown() {
    console.log('showing dropdown');
  }
    
  render()  {
    let currentUser = this.props.currentUser;
    let logout = this.props.logout;
    
    return ( 
      <hgroup className="header-group user-nav">
        <button className="add-product-button" onClick={this.addProduct}>+</button>
        <button className="notification-seed-button" onClick={this.showNotificaitons}>notifications</button>
        <div className="dropdown">
          <button className="user-menu-button" onClick={this.showDropdown}>User Menu</button>
          <ul className="dropdown-content">
            <li>Profile</li>
            <li>Hunt Product</li>
            <li>Log Out</li>
          </ul>
        </div>
      </hgroup> 
      );
    }
}

export default UserNav;