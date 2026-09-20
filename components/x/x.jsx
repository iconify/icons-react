import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rq0-shbua.css';

const viewBox = {"width":12,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rq0-shbua"/>`,
		"fallback": "octicon:x",
	});
}

export default Component;
