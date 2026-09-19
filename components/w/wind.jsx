import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6waltvna.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6waltvna"/>`,
		"fallback": "f7:wind",
	});
}

export default Component;
