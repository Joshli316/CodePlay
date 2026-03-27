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
          return;
        }
      }
      // Default: go home
      this.navigate('/');
    };

    window.addEventListener('hashchange', handleRoute);
    handleRoute();
  }

  setCleanup(fn: () => void) {
    this.currentCleanup = fn;
  }
}

export const router = new Router();
