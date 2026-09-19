import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nh4ohj8im.css';
import '../../css/s/ssawt1dql.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="nh4ohj8im"/><path class="ssawt1dql"/></g>`,
		"fallback": "cryptocurrency-color:zcl",
	});
}

export default Component;
