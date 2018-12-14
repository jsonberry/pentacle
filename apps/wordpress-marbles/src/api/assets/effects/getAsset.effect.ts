import { Effect, HttpError, HttpStatus } from '@marblejs/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { bodyResTransducer } from '../../../common';
import appServices from '../../../services';

/**
 * @api {get} /assets/:id Request Specific Asset
 * @apiName getAssetEffect$
 * @apiGroup Assets
 *
 * @apiSuccess (200) {Object} asset A media asset, most likely an image
 * @apiSuccess {Number} asset._wp_id WordPress Asset ID
 * @apiSuccess {String} asset.id ID of Asset - the slug from WordPress
 * @apiSuccess {Number} asset.post The WP Post ID
 * @apiSuccess {String} asset.thumbnail Asset thumbnail sized URI
 * @apiSuccess {String} asset.medium Asset medium sized URI
 * @apiSuccess {String} asset.medium_large Asset medium_large sized URI
 * @apiSuccess {String} asset.large Asset large sized URI
 * @apiSuccess {String} asset.full Asset full sized URI
 */
export const getAssetEffect$: Effect = req$ =>
  req$.pipe(
    appServices.assets.entity$,
    bodyResTransducer,
    catchError(() =>
      throwError(new HttpError('Asset not found', HttpStatus.NOT_FOUND))
    )
  );
