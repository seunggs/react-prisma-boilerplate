// Global
export const APP_URL = ''
export const PRISMA_HTTP_URL = `${process.env.NODE_ENV === 'production' ? 'https' : 'http'}://${process.env.REACT_APP_PRISMA_SERVER_HOST}:${process.env.PORT || 3000}`
export const PRISMA_WS_URL = `${process.env.NODE_ENV === 'production' ? 'wss' : 'ws'}://${process.env.REACT_APP_PRISMA_SERVER_HOST}:${process.env.PORT || 3000}`
export const REACT_APP_AUTH0_DOMAIN = ''
export const REACT_APP_AUTH0_AUDIENCE = ''

// Editor
export const DEFAULT_NODE = 'paragraph'
export const DEFAULT_IMAGE_WIDTH = 50