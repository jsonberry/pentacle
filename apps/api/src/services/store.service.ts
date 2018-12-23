import { BehaviorSubject } from 'rxjs';
import { Asset, Category, User } from '../api';
import { EntityCache, EntityState } from '../common';
import { Page, Post, Tag } from '@pentacle/models';

export interface Store {
  ASSETS: EntityCache<Asset>;
  CATEGORIES: EntityCache<Category>;
  PAGES: EntityCache<Page>;
  POSTS: EntityCache<Post>;
  TAGS: EntityCache<Tag>;
  USERS: EntityCache<User>;
  selectFeature(type: string): EntityCache<Category | Page | Post | User>;
}

export class StoreService implements Store {
  ASSETS = new BehaviorSubject<EntityState<Asset> | null>(null);
  CATEGORIES = new BehaviorSubject<EntityState<Category> | null>(null);
  PAGES = new BehaviorSubject<EntityState<Page> | null>(null);
  POSTS = new BehaviorSubject<EntityState<Post> | null>(null);
  TAGS = new BehaviorSubject<EntityState<Tag> | null>(null);
  USERS = new BehaviorSubject<EntityState<User> | null>(null);

  public selectFeature<T>(type: string): EntityCache<T> {
    // put null check here
    // better to create a union for the store types
    return this[type];
  }
}
