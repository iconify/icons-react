import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/w/wq8byqbck.css';
import '../../css/t/ttxflub-j.css';
import '../../css/z/zase50b_k.css';
import '../../css/i/iwjqy31kx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="wq8byqbck"/><path class="ttxflub-j"/><path class="zase50b_k"/><path class="iwjqy31kx"/></g>`,
		"fallback": "hugeicons:wind-surf",
	});
}

export default Component;
