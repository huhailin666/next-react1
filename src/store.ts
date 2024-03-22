import { action, makeObservable, observable } from 'mobx'

//声明Store里属性类型
export interface StoreType {
    count: number,
    addCount: Function,
    reduceCount: Function
}

class Store<StoreType> {
    constructor() {
        makeObservable(this)
    }
    @observable count: number = 0
    @action addCount(): void {
        this.count++
    }
    @action reduceCount(): void {
        this.count--
    }
}

export default Store
// export default new Store()