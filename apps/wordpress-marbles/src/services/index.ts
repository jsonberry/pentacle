import * as dotenv from 'dotenv';
import { ReflectiveInjector } from 'injection-js';
import { HttpService } from './http.service';
import { URL_BASE_TOKEN } from './injection-tokens';
import { PagesDao } from './pages-dao.service';
import { PostsDao } from './posts-dao.service';
import { StoreService } from './store.service';
import { UsersDao } from './users-dao.service';
import { CategoriesDao } from './categories-dao.service';
import { AssetsDao } from './assets-dao.service';
dotenv.config();

export const rootInjector = ReflectiveInjector.resolveAndCreate([
  HttpService,
  StoreService,
  { provide: URL_BASE_TOKEN, useValue: process.env.API_BASE },
  PagesDao,
  PostsDao,
  UsersDao,
  CategoriesDao,
  AssetsDao,
]);

export interface AppServices {
  pages: PagesDao;
  posts: PostsDao;
  users: UsersDao;
  categories: CategoriesDao;
  store: StoreService;
  assets: AssetsDao;
  http: HttpService;
  urlBase: string;
}

const appServices: AppServices = {
  pages: rootInjector.get(PagesDao),
  posts: rootInjector.get(PostsDao),
  users: rootInjector.get(UsersDao),
  categories: rootInjector.get(CategoriesDao),
  store: rootInjector.get(StoreService),
  assets: rootInjector.get(AssetsDao),
  http: rootInjector.get(HttpService),
  urlBase: rootInjector.get(URL_BASE_TOKEN),
};

export default appServices;
