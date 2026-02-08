// import {createTambo} from 'tambo';
import Accept from "../components/accept";
import Argue from "../components/argue";
import Reject from "../components/reject";
import Explain from "../components/explain";

// const tambo = createTambo({
//     component: {
//         Accept, Argue, Reject, Explain
//     },
// });

function getUIComponent(userIntent) {
    // return tambo.route({
    //     intent: userIntent,
    //     fallback: Reject
    // });

    const text = (userIntent || "").trim().toLowerCase();
    if (text.includes("submit") || text.includes("ok")) {
        return Accept;
    } 
    if (text.includes("why") || text.includes("explain")) {
        return Explain;
    }
    if (text.includes("don't care") || text.includes("force")) {
        return Argue;
    }
    return Reject;
}

export {getUIComponent};