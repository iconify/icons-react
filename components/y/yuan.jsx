import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dhgwwr1yb.css';
import '../../css/l/lazoeb1xt.css';
import '../../css/j/j987dacbq.css';
import '../../css/k/k10idobrs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dhgwwr1yb"/><path class="lazoeb1xt"/><path class="j987dacbq"/><path class="k10idobrs"/></g>`,
		"fallback": "pepicons-pencil:yuan",
	});
}

export default Component;
