import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx951ac2w.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx951ac2w"/>`,
		"fallback": "picon:windsocket",
	});
}

export default Component;
