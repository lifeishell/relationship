define([], function(){
return [{
	name: '夏夜',
		id: 'xiaye',
		position: [-300, 0, 0],
		relations: [{
			withWho:'uut',
			color: 0xf16f96,
			oneway: false,
			text: '依赖'
		},
		{
			withWho:'heza',
			color: 0x6ec0ef,
			oneway: false,
			text: '保护'
		}]
	}, {
		name: '油油头',
		id: 'uut',
		position: [-275, 150 ,0],
		relations: [{
			withWho:'xiaye',
			color: 0xf16f96,
			oneway: false,
			text: '保护'
		},{
			withWho:'heza',
			color: 0xff9000,
			oneway: false,
			text: '陛下'
		},{
			withWho:'g11',
			color: 0xffd200,
			oneway: false,
			text: '求当挂件'
		},{
			withWho:'amo',
			color: 0xffd200,
			oneway: false,
			text: '求收'
		}]
	}, {
		name: '航小盒',
		id: 'heza',
		position: [-100, 75, -200],
		relations: [{
			withWho:'xiaye',
			color: 0xffa4bc,
			oneway: false,
			text: '闺蜜'
		},{
			withWho:'caiya',
			color: 0x2f78db,
			oneway: false,
			text: '小师妹'
		},{
			withWho:'r',
			color: 0xf16f96,
			oneway: false,
			text: '来来来'
		},{
			withWho:'amo',
			color: 0xffd200,
			oneway: false,
			text: '氪'
		},{
			withWho:'g11',
			color: 0xffd200,
			oneway: false,
			text: '氪'
		}]
	}, {
		name: '菜芽',
		id: 'caiya',
		position: [-150, -185, 50],
		relations: [{
			withWho:'heza',
			color: 0x6cdb2f,
			oneway: false,
			text: '崇拜'
		},{
			withWho:'r',
			color: 0xfb0064,
			oneway: false,
			text: '亲爱的'
		},{
			withWho:'xiu',
			color: 0xa96ab6,
			oneway: false,
			text: '宠爱'
		},{
			withWho:'chick',
			color: 0x533929,
			oneway: false,
			text: '镇压'
		}]
	}, {
		name: 'r',
		id: 'r',
		position: [-50, 0, 150],
		relations: [{
			withWho:'caiya',
			color: 0xf16f96,
			oneway: false,
			text: 'QAQ'
		},
		{
			withWho:'heza',
			color: 0xf16f96,
			oneway: false,
			text: '揉·抱·捏'
		},{
			withWho:'dianzi',
			color: 0x8a8a8a,
			oneway: false,
			text: '太逗'
		}]
	}, {
		name: '阿莫莫',
		id: 'amo',
		position: [120, 20, -50],
		relations: [{
			withWho:'heza',
			color: 0xffd200,
			oneway: false,
			text: '氪*10'
		},
		{
			withWho:'r',
			color: 0xffa4bc,
			oneway: false,
			text: '闺蜜'
		},
		{
			withWho:'g11',
			color: 0xffd200,
			oneway: false,
			text: '氪！！！'
		}]
	}, {
		name: '怪姨姨',
		id: 'g11',
		position: [80, 180, 120],
		relations: [{
			withWho:'heza',
			color: 0xffd200,
			oneway: false,
			text: '氪*1000'
		},
		{
			withWho:'amo',
			color: 0xffd200,
			oneway: false,
			text: '氪*100'
		},
		{
			withWho:'r',
			color: 0x54d786,
			oneway: false,
			text: '某C&某R'
		}]
	}, {
		name: '阿修修',
		id: 'xiu',
		position: [20, -210, 0],
		relations: [{
			withWho:'caiya',
			color: 0xd18de0,
			oneway: false,
			text: '湿乎乎'
		}]
	}, {
		name: '翘毛鸡',
		id: 'chick',
		position: [-340, -260, -100],
		relations: [{
			withWho:'peach',
			color: 0xdde08d,
			oneway: false,
			text: '叽叽叽'
		},{
			withWho:'caiya',
			color: 0x681616,
			oneway: false,
			text: '挑衅'
		},{
			withWho:'yunfei',
			color: 0xff2a43,
			oneway: false,
			text: '美妙的三人行'
		},{
			withWho:'mogu',
			color: 0xff2a43,
			oneway: false,
			text: '美妙的三人行'
		}]
	}, {
		name: '桃子',
		id: 'peach',
		position: [-280, -110, -280],
		relations: [{
			withWho:'chick',
			color: 0xdde08d,
			oneway: false,
			text: '喳喳喳'
		}]
	}, {
		name: '垫子',
		id: 'dianzi',
		position: [60, -160, -220],
		relations: [{
			withWho:'r',
			color: 0xee8100,
			oneway: false,
			text: '女王'
		},{
			withWho:'student',
			color: 0xee0000,
			oneway: false,
			text: '送烧饼'
		},{
			withWho:'amo',
			color: 0xb57474,
			oneway: false,
			text: '欢乐多'
		},{
			withWho:'heza',
			color: 0xff0a66,
			oneway: false,
			text: '大力~'
		},{
			withWho:'yunfei',
			color: 0xffd200,
			oneway: false,
			text: '买单车'
		},{
			withWho:'mogu',
			color: 0xff5796,
			oneway: false,
			text: '佛曰，不可说'
		}]
	}, {
		name: '神秘高中生',
		id: 'student',
		position: [60, -330, -120],
		relations: [{
			withWho:'dianzi',
			color: 0xf16f96,
			oneway: false,
			text: '太逗'
		}]
	}, {
		name: '云飞',
		id: 'yunfei',
		position: [240, -160, -120],
		relations: [{
			withWho:'dianzi',
			color: 0xffd200,
			oneway: false,
			text: '买耳机'
		},{
			withWho:'g11',
			color: 0xffd200,
			oneway: false,
			text: '求当挂件'
		},{
			withWho:'amo',
			color: 0xffd200,
			oneway: false,
			text: '求收'
		},{
			withWho:'chick',
			color: 0xff2a43,
			oneway: false,
			text: '美妙的三人行'
		},{
			withWho:'mogu',
			color: 0xff2a43,
			oneway: false,
			text: '美妙的三人行'
		}]
	}, {
		name: '菇奶奶',
		id: 'mogu',
		position: [-400, 200 ,-100],
		relations: [{
			withWho:'xiaye',
			color: 0xff1955,
			oneway: false,
			text: '搅基技术指导'
		},{
			withWho:'dianzi',
			color: 0xff5796,
			oneway: false,
			text: '佛曰，不可说'
		},{
			withWho:'chick',
			color: 0xff2a43,
			oneway: false,
			text: '美妙的三人行'
		},{
			withWho:'yunfei',
			color: 0xff2a43,
			oneway: false,
			text: '美妙的三人行'
		}]
	}];
});