import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, switchMap } from 'rxjs/operators';
import { DataServiceService } from '../../services/data.service';
import { getData, createBookSuccess } from './data.actions';
import { Charts, DataState } from '../../models/data.model';

@Injectable()
export class DataEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly dataService: DataServiceService
  ) {}

  getData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getData.type),
      switchMap(() => this.dataService.getData()),
      map((data: Charts[]) => createBookSuccess({ isLoading: false, data }))
    )
  );
}
