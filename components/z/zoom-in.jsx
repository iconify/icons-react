import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c561ylaaj.css';
import '../../css/g/gl5rl746c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c561ylaaj"/><path class="gl5rl746c"/>`,
		"fallback": "cil:zoom-in",
	});
}

export default Component;
