import { createStore } from "redux";

const initialState = {
    issues: [
        {
            name: "Issue 1",
            description: "Description 1",
            progress: "In Progress",
            due: "2022-12-31",
            assignee: "User 1",
            completed: false,
            completedDate: null,
        },
        // ...other issues
    ],
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "TOGGLE_COMPLETION":
            return {
                ...state,
                issues: state.issues.map((issue, index) => {
                    if (index !== action.index) return issue;
                    return {
                        ...issue,
                        completed: !issue.completed,
                        completedDate: !issue.completed ? new Date() : null,
                    };
                }),
            };
        default:
            return state;
    }
}

export const store = createStore(reducer);
