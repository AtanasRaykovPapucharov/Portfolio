import { IPoint } from '../interfaces/IPoint';
import { IGameObject } from '../interfaces/IGameObject';

export class GameObject implements IGameObject {
	position: IPoint;
	size: IPoint;
	kind: string;

	constructor(pos: IPoint, size: IPoint, kind: string) {
		this.position = pos;
		this.size = size;
		this.kind = kind;
	}
}