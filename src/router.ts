interface Route {
  pattern: RegExp;
  paramNames: string[];
  handler: (params: Record<string, string>) => void;
}

class Router {
  private routes: Route[] = [];
  private currentCleanup: (() => void) | null = null;

  addRoute(path: string, handler: (params: Record<string, string>) => void) {
    const paramNames: string[] = [];
    const pattern = path.replace(/:(\w+)/g, (_, name) => {
      paramNames.push(name);
      return '([^/]+)';
    });
    this.routes.push({
      pattern: new RegExp(`^#${pattern}$`),
      paramNames,
      handler,
    });
  }

  navigate(path: string) {
    window.location.hash = path;
  }

  start() {
    const handleRoute = () => {
      if (this.currentCleanup) {
        this.currentCleanup();
        this.currentCleanup = null;
      }

      const hash = window.location.hash || '#/';
      for (const route of this.routes) {
        const match = hash.match(route.pattern);
        if (match) {
          const params: Record<string, string> = {};
          route.paramNames.forEach((name, i) => {
            params[name] = match[i + 1];
          });
          route.handler(params);
          // Scroll to top on navigation
          window.scrollTo(0, 0);
          // Move focus to app container after navigation for keyboard/screen reader users
          const app = document.getElementById('app');
          if (app) { app.setAttribute('tabindex', '-1'); app.focus({ preventScroll: true }); }
          return;
        }
      }
      // Default: go home (guard against loop if '/' itself doesn't match)
      if (hash !== '#/') this.navigate('/');
    };

    window.addEventListener('hashchange', handleRoute);
    handleRoute();
  }

  setCleanup(fn: () => void) {
    this.currentCleanup = fn;
  }
}

export const router = new Router();
