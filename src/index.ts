//Абстрактный класс MyGraphicsPrimitive2D
abstract class MyGraphicsPrimitive2D {
	topPoint: number
	bottomPoint: number

	move(value: number): void {
		console.log('Сместить' + value)
	}
}

//абстрактный класс MyAreaPrimitive2D наследуется от MyGraphicsPrimitive2D
abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
	area(): void {
		console.log('area')
	}
}

//класс MyCircle наследуется от MyAreaPrimitive2D
class MyCircle extends MyAreaPrimitive2D {
	public centerCircle: number
	public radius: number
}

//класс MyRectangle так же наследуется от MyAreaPrimitive2D
class MyRectangle extends MyAreaPrimitive2D {
	public width: number
	public height: number
}



