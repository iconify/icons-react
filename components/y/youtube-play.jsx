import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvj4naczm.css';

const viewBox = {"width":1792,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvj4naczm"/>`,
		"fallback": "fa:youtube-play",
	});
}

export default Component;
