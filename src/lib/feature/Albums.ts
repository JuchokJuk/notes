export interface Track {
	name: string;
	price: number;
	url: string;
}

export interface Album {
	id: number;
	name: string;
	description: string;
	videoUrl: string;
	tracks: Track[];
}

export const albums: Album[] = [
	{
		id: 0,
		name: 'Букет сентиментальных прелюдий',
		description: 'Посвящается моей жене Татьяне Валентиновне Лариной',
		videoUrl: '/video/1.webm',
		tracks: []
	},
	{
		id: 1,
		name: 'Альбом посвящений. Первая тетрадь',
		description: '10 пьес',
		videoUrl: '/video/2.webm',
		tracks: []
	},
	{
		id: 2,
		name: 'Альбом посвящений. Вторая тетрадь',
		description: '9 пьес',
		videoUrl: '/video/3.webm',
		tracks: []
	},
	{
		id: 3,
		name: '10 избранных этюдов',
		description:
			'Произведения предназначены для учащихся старших классов музыкальных школ, студентов музыкальных колледжей, а так же гитаристов-любителей хорошо разбирающихся в нотной грамоте и имеющих соответствующий технический уровень подготовки',
		videoUrl: '/video/4.webm',
		tracks: [
			{
				name: 'Этюд №1 до-мажор',
				price: 2000,
				url: '/audio/1.mp3'
			},
			{
				name: 'Этюд №2 ля-минор',
				price: 2000,
				url: '/audio/2.mp3'
			},
			{
				name: 'Этюд №3 до-мажор',
				price: 2000,
				url: '/audio/3.mp3'
			},
			{
				name: 'Этюд №4 ми-минор',
				price: 2000,
				url: '/audio/4.mp3'
			},
			{
				name: 'Этюд №5 до-мажор',
				price: 2000,
				url: '/audio/5.mp3'
			},
			{
				name: 'Этюд №6 ми-минор',
				price: 2000,
				url: '/audio/6.mp3'
			},
			{
				name: 'Этюд №7 до-мажор',
				price: 2000,
				url: '/audio/7.mp3'
			},
			{
				name: 'Этюд №8 ля-минор',
				price: 2000,
				url: '/audio/8.mp3'
			},
			{
				name: 'Этюд №9 до-мажор',
				price: 2000,
				url: '/audio/9.mp3'
			},
			{
				name: 'Этюд №10 соль-мажор',
				price: 2000,
				url: '/audio/10.mp3'
			}
		]
	}
];
