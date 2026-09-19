import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ratl6yjby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ratl6yjby"/>`,
		"fallback": "bxl:windsurf",
	});
}

export default Component;
