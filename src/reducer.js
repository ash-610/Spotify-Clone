export const initialState = {
    user : null,
    playlists: [],
    isPlaying: false,
    initialPlaylist: null,
    currentPlaylist: null,
    selectedPlaylistId: null,
    selectedTrack: null,
    selectedTrackIndex: null,
    token: null,
    item: null
}

const reducer = (state, action) =>{

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        
        case 'SET_TOKEN':
            return {
                ...state,
                token : action.token
            }

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists : action.playlists
            }

        case 'SET_PLAYLIST_ID':
            return {
                ...state,
                selectedPlaylistId : action.selectedPlaylistId
            }

        case 'SET_INITIAL_PLAYLIST':
            return {
                ...state,
                initialPlaylist : action.initialPlaylist
            }

        case 'SET_CURRENT_PLAYLIST':
            return {
                ...state,
                currentPlaylist : action.currentPlaylist
            }

        case 'SET_SELECTED_TRACK':
            return {
                ...state,
                selectedTrack : action.selectedTrack
            }

        case 'SET_SELECTED_TRACK_INDEX':
            return {
                ...state,
                selectedTrackIndex : action.selectedTrackIndex
            }

        case 'SET_ISPLAYING':
            return {
                ...state,
                isPlaying : action.isPlaying
            }
        default:
            return state
    }                                                                                   
}

export default reducer;