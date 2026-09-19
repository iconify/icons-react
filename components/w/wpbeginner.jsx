import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pted-0bsv.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pted-0bsv"/>`,
		"fallback": "fa7-brands:wpbeginner",
	});
}

export default Component;
