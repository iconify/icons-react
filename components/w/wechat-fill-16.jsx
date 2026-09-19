import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh_gcb3dt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fh_gcb3dt"/>`,
		"fallback": "garden:wechat-fill-16",
	});
}

export default Component;
