const requireAuth = (nextState, replace) => {
  if (!auth.isAdmin()) {
    // Redirect to Home page if not an Admin
    replace({ pathname: '/' })
  }
}

export const AdminRoutes = () => {
  return (
      <Route path="/admin" component={Admin} onEnter={requireAuth} />
  )
}
