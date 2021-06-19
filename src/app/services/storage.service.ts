import { Pedido } from './../models/pedido';
import { LocalUser } from './../models/local_user';
import { Injectable } from "@angular/core";
import { STORAGE_KEYS } from "../api_config/storage_keys.config";
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable()
export class StorageService {
  user: LocalUser;

  constructor(private nativeStorage: NativeStorage) {
  }

  getLocalUser(): LocalUser {
    let usr = localStorage.getItem(STORAGE_KEYS.localUser);
    if (usr == null) {
      return null;
    }
    else {
      console.log(usr)
      return JSON.parse(usr);
    }
  }

  setLocalUser(obj: LocalUser) {
    if (obj == null) {
      localStorage.removeItem(STORAGE_KEYS.localUser);
    }
    else {
      localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
    }
  }

  getPedido(): Pedido {
    let pedido = localStorage.getItem(STORAGE_KEYS.pedido);
    if (pedido == null) {
      return null;
    }
    else {
      console.log(pedido)
      return JSON.parse(pedido);
    }
  }

  setPedido(obj: Pedido) {
    if (obj == null) {
      localStorage.removeItem(STORAGE_KEYS.pedido);
    }
    else {
      localStorage.setItem(STORAGE_KEYS.pedido, JSON.stringify(obj));
    }
  }
}
