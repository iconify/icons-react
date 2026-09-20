import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/senz_sbfq.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="senz_sbfq"/>`,
		"fallback": "wi:wind-beaufort-0",
	});
}

export default Component;
