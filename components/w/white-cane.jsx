import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m6k6_gbzy.css';
import '../../css/b/bfcww6shf.css';
import '../../css/g/gum7n2-0r.css';
import '../../css/c/ch2zrrr6x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m6k6_gbzy"/><path class="bfcww6shf"/><path class="gum7n2-0r"/><path class="ch2zrrr6x"/></g>`,
		"fallback": "fluent-emoji-flat:white-cane",
	});
}

export default Component;
