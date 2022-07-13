import {TypedUseSelectorHook, useSelector, useDispatch} from 'react-redux'
import {RootState, AppDispatch} from './store'

//this handle the application state =>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector