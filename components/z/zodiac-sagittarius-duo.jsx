import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wyi1gfa0v.css';
import '../../css/b/bvqbbtbxu.css';
import '../../css/u/unco9rq0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wyi1gfa0v"/><path class="bvqbbtbxu"/><path class="unco9rq0c"/></g>`,
		"fallback": "iconaut:zodiac-sagittarius-duo",
	});
}

export default Component;
