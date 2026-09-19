import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-go91ypk.css';
import '../../css/m/mkwx26bok.css';
import '../../css/f/fv05gfbud.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-go91ypk"/><path class="mkwx26bok"/><path class="fv05gfbud"/>`,
		"fallback": "carbon:webhook",
	});
}

export default Component;
