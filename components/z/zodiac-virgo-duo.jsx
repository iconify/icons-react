import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qmicmbcyc.css';
import '../../css/c/cn99xcc2h.css';
import '../../css/p/p--ya6vnf.css';
import '../../css/x/xd9fo3moo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="qmicmbcyc"/><path class="cn99xcc2h"/><path class="p--ya6vnf"/><path class="xd9fo3moo"/></g>`,
		"fallback": "iconaut:zodiac-virgo-duo",
	});
}

export default Component;
