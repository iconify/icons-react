import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v496_6y4f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v496_6y4f"/>`,
		"fallback": "streamline:yuan-yen-remix",
	});
}

export default Component;
