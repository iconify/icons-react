import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c__7q5bmw.css';
import '../../css/r/rknde7bur.css';
import '../../css/b/b209fsbmb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c__7q5bmw"/><path class="rknde7bur"/><path class="b209fsbmb"/>`,
		"fallback": "fxemoji:womenssymbol",
	});
}

export default Component;
