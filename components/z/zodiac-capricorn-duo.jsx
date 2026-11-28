import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtzcofwpv.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l2afs2b-w.css';
import '../../css/r/rk9lscbew.css';
import '../../css/j/j3h53ubtj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtzcofwpv secondary"/><g class="dt0cm9dhy primary"><path class="l2afs2b-w"/><path class="rk9lscbew"/><path class="j3h53ubtj"/></g>`,
		"fallback": "iconaut:zodiac-capricorn-duo",
	});
}

export default Component;
