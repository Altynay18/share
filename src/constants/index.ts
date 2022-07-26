export enum ROUTES {
  MAIN = '/',
  LOGIN = '/login',
  REGISTER = '/register',
  ADMIN = '/admin',
  PROFILE = '/profile',
  FEED = '/feed',
  MENTORSHIP = '/mentorship',
  TRAINING = '/training',
  ARTICLES = '/articles',
  PROJECTS = '/projects',
  REFLECTIONS = '/reflections',
  MY_PROJECTS = 'my-projects',
  ADD_POSTS = 'add-posts',
  PENDING_USERS = 'pending-users',
  SETTINGS = 'settings',
  NOTIFICATION = '/notification',
  SEARCH_USER = '/search-user',
}

export enum COLORS {
  YELLOW = '#F7A325',
  OCEAN_BLUE = '#BCD7DA',
  RED = '#ef233c',
  BLACK = '#151E27',
  GRAY = '#f0f0f5',
  DARK_GRAY = '#9DA2A5',
  LIGHT_GRAY = '#E2E8F0'
}

export enum ROLES {
  ADMIN = '[ROLE_ADMIN]',
  USER = '[ROLE_USER]'
}

export enum PERMISSIONS {
  SUPER_ADMIN,
  ADMIN,
  USER
}


export enum TAG_NAMES {
  TRAINING_AND_TEACHING = 'trainingAndTeaching',
  TEACHERS_COLLABORATION = 'teachersCollaboration',
  CREATE_CONDITIONS = 'createConditions',
  METHODOLOGY_AR = 'methodologyAR',
  TRAINEE_SUPPORT = 'traineeSupport'
}

export enum INPUT_FIELD {
  NAME = 'name',
  SURNAME = 'surname',
  EMAIL = 'email',
  PHONE = 'phone',
  PASSWORD = 'password',
  TEXT = 'text',
  WORD = 'word',
  IIN = 'iin'
}
