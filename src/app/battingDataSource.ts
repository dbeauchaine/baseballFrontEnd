//import { CollectionViewer, DataSource } from "@angular/cdk/collections";
//import { Batting } from './batting';
//import { BehaviorSubject, Observable } from 'rxjs';
//import { BattingService } from './batting.service';
//import { of } from 'rxjs';
//import { catchError, finalize } from 'rxjs/operators';

//export class BattingDataSource implements DataSource<Batting> {
//    private battingSubject = new BehaviorSubject<Batting[]>([]);
//    private loadingSubject = new BehaviorSubject<boolean>(false);

//    public loading$ = this.loadingSubject.asObservable();

//    constructor(private battingService: BattingService) { }

//    connect(collectionViewer: CollectionViewer): Observable<Batting[]> {
//        return this.battingSubject.asObservable();
//    }

//    disconnect(collectionViewer: CollectionViewer): void {
//        this.battingSubject.complete();
//        this.loadingSubject.complete();
//    }

//    loadBattingData(playerId: string,
//        sortDirection: string, pageIndex: number, pageSize: number) {
//        this.loadingSubject.next(true);

//        this.battingService.getBattingStats(playerId).pipe(
//            catchError(() => of([])),
//            finalize(() => this.loadingSubject.next(false))
//        )
//            .subscribe(batting => this.battingSubject.next(batting));
//    }
//}
