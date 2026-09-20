import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gppxg7n_a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gppxg7n_a"/>`,
		"fallback": "streamline:wifi-antenna-remix",
	});
}

export default Component;
