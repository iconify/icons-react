import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qin0occ5a.css';

const viewBox = {"width":1536,"height":1600};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qin0occ5a"/>`,
		"fallback": "fa:whatsapp",
	});
}

export default Component;
