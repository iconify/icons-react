import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1hn7mb8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1hn7mb8j"/>`,
		"fallback": "tabler:writing",
	});
}

export default Component;
