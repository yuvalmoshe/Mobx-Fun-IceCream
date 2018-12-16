import { observable, action, computed } from "mobx";

class IceCreamStore {
	@observable iceCreams = [];
	@computed get iceCreamsCount(){
		return this.iceCreams.length;
	}
 
    @action addIceCream = (flavor, color, img) => {
        this.iceCreams.push({ flavor, color, img });
    }

    @action removeIceCream = (i) => {
        let index = this.iceCreams.indexOf(i);
        this.iceCreams.splice(index , 1);
    }

    // @action editIceCream = () => {
    //     this.iceCreams
    // }
}

const store = new IceCreamStore();
export default store;