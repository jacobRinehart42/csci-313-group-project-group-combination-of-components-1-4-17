import { Injectable } from "@angular/core";

@Injectable()
export class RoutingService {
  showLogin: boolean = true;
  showCreateAccount: boolean = false;
  showDashboard: boolean = true;
  showSignOut: boolean = false;
  showItems: boolean = false;
  showEditItem: boolean = false;
  showMyItems: boolean = false;
  showSignedInUserInfo: boolean = false;
  showCreateItem: boolean = false;
  showItem: boolean = false;
  //not mandatory but why not
  showPassword: boolean = false;

  onLogin() {
    this.showLogin = false;
    this.showCreateAccount = false;
    this.showDashboard = true;
    this.showSignOut = true;
    this.showItems = true;
    this.showEditItem = false;
    this.showSignedInUserInfo = false;
    this.showCreateItem = false;
    this.showPassword = false;
    this.showMyItems = false;
  }

  onShowCreateAccount() {
    this.showLogin = false;
    this.showCreateAccount = true;
    this.showDashboard = true;
    this.showSignOut = false;
    this.showItems = false;
    this.showEditItem = false;
    this.showSignedInUserInfo = false;
    this.showCreateItem = false;
    this.showPassword = false;
    this.showMyItems = false;
  }

  onShowSignedInUser() {
    this.showLogin = false;
    this.showCreateAccount = false;
    this.showDashboard = true;
    this.showSignOut = false;
    this.showItems = false;
    this.showEditItem = false;
    this.showSignedInUserInfo = true;
    this.showCreateItem = false;
    this.showPassword = false;
    this.showMyItems = false;
  }

  onShowCreateItem() {
    this.showLogin = false;
    this.showCreateAccount = false;
    this.showDashboard = true;
    this.showSignOut = false;
    this.showItems = false;
    this.showEditItem = false;
    this.showSignedInUserInfo = false;
    this.showCreateItem = true;
    this.showPassword = false;
    this.showMyItems = false;
  }

  onShowMyItems() {
    this.showLogin = false;
    this.showCreateAccount = false;
    this.showDashboard = true;
    this.showSignOut = false;
    this.showItems = false;
    this.showEditItem = false;
    this.showSignedInUserInfo = false;
    this.showCreateItem = false;
    this.showPassword = false;
    this.showMyItems = true;
  }

  onShowPassword() {
    this.showLogin = false;
    this.showCreateAccount = false;
    this.showDashboard = true;
    this.showSignOut = false;
    this.showItems = false;
    this.showEditItem = false;
    this.showSignedInUserInfo = false;
    this.showCreateItem = false;
    this.showPassword = true;
    this.showMyItems = false;
  }

  onShowEditItem() {
    this.showLogin = false;
    this.showCreateAccount = false;
    this.showDashboard = true;
    this.showSignOut = false;
    this.showItems = false;
    this.showEditItem = true;
    this.showSignedInUserInfo = false;
    this.showCreateItem = false;
    this.showPassword = false;
    this.showMyItems = false;
  }

  onShowItems() {
    this.showLogin = false;
    this.showCreateAccount = false;
    this.showDashboard = true;
    this.showSignOut = false;
    this.showItems = true;
    this.showEditItem = false;
    this.showSignedInUserInfo = false;
    this.showCreateItem = false;
    this.showPassword = false;
    this.showMyItems = false;
  }

  constructor() {}
}
