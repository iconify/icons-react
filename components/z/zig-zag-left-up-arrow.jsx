import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/m/mudhp9b9u.css';
import '../../css/l/l1be-5b8y.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="mudhp9b9u"/><path class="l1be-5b8y"/></g>`,
		"fallback": "marketeq:zig-zag-left-up-arrow",
	});
}

export default Component;
