import { Injectable } from "@angular/core";
import { STORAGE_KEYS } from "../api_config/storage_keys.config";
import { LocalUser } from "../models/local_user";
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable()
export class StorageService {

  constructor(private nativeStorage: NativeStorage) { }

  getLocalUser() : LocalUser {
    let usr = null; this.nativeStorage.getItem(STORAGE_KEYS.localUser)
      .then(
        data => {
          usr = JSON.parse(data)
        },
        error => {
          console.log(error)
        }
      )
      return usr;
    ;
  }

  setLocalUser(obj : LocalUser) {
    if (obj == null) {
      this.nativeStorage.remove(STORAGE_KEYS.localUser);
    }
    else {
      this.nativeStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
    }
  }
}
