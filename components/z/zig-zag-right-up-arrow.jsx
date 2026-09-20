import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/c6oxl0ueo.css';
import '../../css/z/z7zxn0bas.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="c6oxl0ueo"/><path class="z7zxn0bas"/></g>`,
		"fallback": "marketeq:zig-zag-right-up-arrow",
	});
}

export default Component;
