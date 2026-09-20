import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4-i83b6x.css';
import '../../css/c/c8yw7loqa.css';
import '../../css/y/yi_r72bau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4-i83b6x"/><path class="c8yw7loqa"/><path class="yi_r72bau"/>`,
		"fallback": "uim:wrap-text",
	});
}

export default Component;
