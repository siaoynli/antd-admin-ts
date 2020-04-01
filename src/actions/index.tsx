import {
  INCREMENT,
  INCREMENT_TYPE,
  INCREMENT_ASYNC,
  INCREMENT_ASYNC_TYPE,
  FETCH_REQUEST,
  FETCH_REQUEST_TYPE
} from '../constants'

export interface INCREMENT_ACTION {
  type: INCREMENT_TYPE
}

export interface INCREMENT_ASYNC_ACTION {
  type: INCREMENT_ASYNC_TYPE
}

export interface FETCH_REQUEST_ACTION {
  type: FETCH_REQUEST_TYPE
}

export const increate = (): INCREMENT_ACTION => ({ type: INCREMENT })

export const increateAsync = (): INCREMENT_ASYNC_ACTION => ({ type: INCREMENT_ASYNC })

export const fetch_user = (): FETCH_REQUEST_ACTION => ({ type: FETCH_REQUEST })
