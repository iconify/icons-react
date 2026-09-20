import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_gzhippd.css';

const viewBox = {"width":10,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_gzhippd"/>`,
		"fallback": "octicon:zap",
	});
}

export default Component;
