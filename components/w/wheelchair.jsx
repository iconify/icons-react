import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s01zth5am.css';

const viewBox = {"width":1632,"height":1760};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s01zth5am"/>`,
		"fallback": "fa:wheelchair",
	});
}

export default Component;
