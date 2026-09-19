import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sm3vwht4g.css';
import '../../css/y/yg-vzhbhz.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="sm3vwht4g"/><path class="yg-vzhbhz"/></g>`,
		"fallback": "fad:zoomin",
	});
}

export default Component;
