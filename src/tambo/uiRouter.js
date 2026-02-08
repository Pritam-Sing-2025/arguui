import Accept from "../components/accept";
import Argue from "../components/argue";
import Reject from "../components/reject";
import Explain from "../components/explain";

function getUIComponent(userIntent) {
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