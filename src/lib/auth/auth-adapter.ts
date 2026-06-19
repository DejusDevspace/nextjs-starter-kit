type AuthTokenGetter = () => string | null | Promise<string | null>;
type UnauthorizedHandler = () => void;

let tokenGetter: AuthTokenGetter = () => null;
let unauthorizedHandler: UnauthorizedHandler = () => undefined;

export function configureAuthAdapter(options: {
  getToken?: AuthTokenGetter;
  onUnauthorized?: UnauthorizedHandler;
}) {
  tokenGetter = options.getToken ?? tokenGetter;
  unauthorizedHandler = options.onUnauthorized ?? unauthorizedHandler;
}

export function getAuthToken() {
  return tokenGetter();
}

export function handleUnauthorized() {
  unauthorizedHandler();
}
