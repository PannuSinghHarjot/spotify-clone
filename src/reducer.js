export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: 'BQDT4igHAtbUgQ_asvD4dgplQERH52QzFhNTYaxe0sPt5vWv1aLyokDbemlzirlMYmEtrEBCE8Ja8zcOBMpqG8FzFD6Jk3B5szDZVFVZ2pvwjv9AUHfp5g8doUVqdk7EjqCvPv45GzAn0rQuPTGABL2TaQOKjjFTPi2WkrN_hTqyhLV6'
}

const reducer = (state , action) => {
    console.log(action)
    switch (action.type) {
        
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
            case 'SET_TOKEN':
                return {
                    ...state,
                    token: action.token
                };
            case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            };
            case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state
    }
}

export default reducer;