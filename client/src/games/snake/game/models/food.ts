import { IPoint } from '../interfaces/IPoint';
import { GameObject } from './gameObject';

export class Food extends GameObject {
	constructor(pos: IPoint, size: IPoint, kind: string) {
		super(pos, size, kind);
	}
}