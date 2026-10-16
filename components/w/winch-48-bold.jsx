import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpxr-ob7u.css';
import '../../css/v/v7-g3_bql.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpxr-ob7u"/><path class="v7-g3_bql"/>`,
		"fallback": "energy-icons:winch-48-bold",
	});
}

export default Component;
