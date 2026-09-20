import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncfoy5-4h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ncfoy5-4h"/>`,
		"fallback": "streamline:windmill-remix",
	});
}

export default Component;
