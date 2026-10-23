import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q01yxwu5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q01yxwu5f"/>`,
		"fallback": "vadivam:wifi-pen",
	});
}

export default Component;
