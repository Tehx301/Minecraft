/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/MINECRAFT`; params?: Router.UnknownInputParams; } | { pathname: `/MINE`; params?: Router.UnknownInputParams; } | { pathname: `/mods`; params?: Router.UnknownInputParams; } | { pathname: `/youtubes`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/MINECRAFT`; params?: Router.UnknownOutputParams; } | { pathname: `/MINE`; params?: Router.UnknownOutputParams; } | { pathname: `/mods`; params?: Router.UnknownOutputParams; } | { pathname: `/youtubes`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/MINECRAFT${`?${string}` | `#${string}` | ''}` | `/MINE${`?${string}` | `#${string}` | ''}` | `/mods${`?${string}` | `#${string}` | ''}` | `/youtubes${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/MINECRAFT`; params?: Router.UnknownInputParams; } | { pathname: `/MINE`; params?: Router.UnknownInputParams; } | { pathname: `/mods`; params?: Router.UnknownInputParams; } | { pathname: `/youtubes`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; };
    }
  }
}
