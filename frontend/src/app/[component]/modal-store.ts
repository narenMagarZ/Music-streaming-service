import {create} from 'zustand'

type FormType = 'profile'|'create-playlist'|'liked-songs'|'your-playlists'|''
interface ModalState {
    isOpen:boolean,
    formType:FormType
    closeModal:()=>void
    openModal:(type:FormType)=>void
}

export const useModalStore = create<ModalState>((set)=>({
    isOpen:false,
    formType:'',
    openModal:(type)=>set((state)=>({...state,isOpen:true,formType:type})),
    closeModal:()=>set((state)=>({...state,isOpen:false,formType:''}))
}))