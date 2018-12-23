import { ReflectiveInjector } from 'injection-js';
import { HttpService } from './http.service';
import { URL_BASE_TOKEN } from './injection-tokens';
import { PagesDao } from './pages-dao.service';
import { PostsDao } from './posts-dao.service';
import { StoreService } from './store.service';
import { UsersDao } from './users-dao.service';
import { CategoriesDao } from './categories-dao.service';
import { AssetsDao } from './assets-dao.service';
import { TagsDao } from './tags-dao.service';

export const rootInjector = ReflectiveInjector.resolveAndCreate([
  HttpService,
  StoreService,
  { provide: URL_BASE_TOKEN, useValue: process.env.API_BASE },
  AssetsDao,
  CategoriesDao,
  PagesDao,
  PostsDao,
  TagsDao,
  UsersDao,
]);

export interface AppServices {
  assets: AssetsDao;
  categories: CategoriesDao;
  http: HttpService;
  pages: PagesDao;
  posts: PostsDao;
  store: StoreService;
  urlBase: string;
  tags: TagsDao;
  users: UsersDao;
}

const appServices: AppServices = {
  http: rootInjector.get(HttpService),
  store: rootInjector.get(StoreService),
  urlBase: rootInjector.get(URL_BASE_TOKEN),
  assets: rootInjector.get(AssetsDao),
  categories: rootInjector.get(CategoriesDao),
  pages: rootInjector.get(PagesDao),
  posts: rootInjector.get(PostsDao),
  tags: rootInjector.get(TagsDao),
  users: rootInjector.get(UsersDao),
};

export default appServices;
