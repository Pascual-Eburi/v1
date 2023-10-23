
export default class LocalStorage {
    private storage : Storage;
    private key : string;
    
    constructor( key : string) {
        this.storage = window.localStorage;
        this.key = key;
    }

    setItem(value: string) {
        this.storage.setItem(this.key, value);
    }

    getItem() {
        return this.storage.getItem( this.key );
    }
}