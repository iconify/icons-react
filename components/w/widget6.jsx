import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffj6e6kvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ffj6e6kvb"/>`,
		"fallback": "reicon:widget6",
	});
}

export default Component;
