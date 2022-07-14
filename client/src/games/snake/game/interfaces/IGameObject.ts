import { IPoint } from './IPoint';

export interface IGameObject {
	position: IPoint;
	size: IPoint;
	kind: string;
}