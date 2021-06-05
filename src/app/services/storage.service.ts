import { Injectable } from "@angular/core";
import { STORAGE_KEYS } from "../api_config/storage_keys.config";
import { LocalUser } from "../models/local_user";
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Cart } from "../models/cart";

@Injectable()
export class StorageService {

  constructor(private nativeStorage: NativeStorage) { }

  getLocalUser() : LocalUser {
      let usr = null;
      usr = this.nativeStorage.getItem(STORAGE_KEYS.localUser)
        .catch(console.log);
      return usr;
    }

  setLocalUser(obj : LocalUser) {
    if (obj == null) {
      this.nativeStorage.remove(STORAGE_KEYS.localUser);
    }
    else {
      this.nativeStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
    }
  }

  getCart() : Cart {
    let str = localStorage.getItem(STORAGE_KEYS.cart);
    if (str != null) {
        return JSON.parse(str);
    }
    else {
        return null;
    }
  }

  setCart(obj : Cart) {
    if (obj != null) {
        localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(obj));
    }
    else {
        localStorage.removeItem(STORAGE_KEYS.cart);
    }
  }

}
