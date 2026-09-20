import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prs0t9bmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prs0t9bmd"/>`,
		"fallback": "tdesign:windy",
	});
}

export default Component;
