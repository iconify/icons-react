import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aux903b8q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aux903b8q"/>`,
		"fallback": "selfhst:wikidocs-light",
	});
}

export default Component;
