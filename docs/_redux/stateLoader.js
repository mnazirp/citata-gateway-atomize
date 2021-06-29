
class StateLoader {
    loadState() {
        try {
            let serializedState = localStorage.getItem("rootState");
            if (serializedState === null) {
                return this.initializeState();
            }
            return JSON.parse(serializedState);
        }
        catch (err) {
            console.log('stateLoader error: ', err.message)
            return this.initializeState();
        }
    }

    saveState(state) {
        try {
            let serializedState = JSON.stringify(state);
            localStorage.setItem("rootState", serializedState);
        }
        catch (err) {
            console.log('stateLoader error: ', err.message)
        }
    }

    initializeState() {
        return {}
    };
}

export default new StateLoader()