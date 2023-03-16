import {Injectable} from "@angular/core";
import {BehaviorSubject, distinctUntilChanged, map, Observable} from "rxjs";
import {AppState, initialAppState} from "./state";
import {Action} from "./actions";
import {reduce} from "./reducer";

@Injectable({providedIn: 'root'})
export class Store {


  // AKA: selectors
  get state$(): Observable<AppState> {
    return this._state.asObservable();
  }

  // AKA: state
  private _state: BehaviorSubject<AppState> = new BehaviorSubject<AppState>(initialAppState);

  private get state(): AppState {
    return this._state.getValue();
  }

  select<K>(selector: (state: AppState) => K): Observable<K> {
    return this.state$.pipe(map(selector), distinctUntilChanged());
  }

  // AKA: dispatch
  dispatch(action: Action): void {
    this._state.next(reduce(this.state, action))
  }


}
