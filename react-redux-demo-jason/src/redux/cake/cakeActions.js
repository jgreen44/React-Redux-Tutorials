// Define action creators
import { BUY_CAKE } from "./cakeTypes";

// action creator (the function)
// You "dispatch" action creators
export const buyCake = () => {
    // action
    return {
        type: BUY_CAKE
    }
}