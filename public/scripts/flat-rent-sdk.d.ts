export function cloneDate(date: Date): Date

export function addDays(date: Date, days: Date): Date

export function get<T>(id: string): Promise<T>

export function search<T>(parameters: Object): Promise<T>

export function book<T>(flatId: number, checkInDate: Date, checkOutDate: Date): Promise<number>

export function _assertDatesAreCorrect(checkInDate: Date, checkOutDate: Date): Date

export function _resetTime(date: Date): void

export function _calculateDifferenceInDays(startDate: Date, endDate: Date): number

export function _generateDateRange(from: Date, to: Date): any[]

export function _generateTransactionId(): number

export function _areAllDatesAvailable(flat: string, dateRange: []): boolean

export function _formatFlatObject(flat: string, nightNumber: number): Object

export function _readDatabase(): Object

export interface DB {
	id: string
	title: string
	details: string
	photos: string[]
	coordinates: number[]
	bookedDates: any[]
	price: number
}

export function _writeDatabase(database: DB): void

export function _syncDatabase(database: DB): void
