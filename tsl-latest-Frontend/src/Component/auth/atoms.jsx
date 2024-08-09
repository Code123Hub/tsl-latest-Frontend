




import {atom} from 'recoil';

export const jwtTokenState = atom ({
    key: 'jwtTokenState',
    default : null
});

export const userIdState = atom ({
    key : 'userIdState',
    default : null,
})

export const paidUserState = atom ({
    key : 'paidUserState',
    default : null,
})

// This code is defining three atoms using the Recoil library, which is typically used for state management in React applications.