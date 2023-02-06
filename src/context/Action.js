export const LoginStart = (userCredential) => ({
    type: "LOGIN_START"
});


export const LoginSuccess = (user) => ({
    types: "LOGIN_SUCCESS",
    payload: user,
});


export const LoginFailure = () => ({
    type: "LOGIN_FAILURE"
});


export const Logout = () => ({
    type: "LOGOUT"
})