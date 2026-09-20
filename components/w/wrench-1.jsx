import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh0ehhbib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uh0ehhbib"/>`,
		"fallback": "streamline-cyber:wrench-1",
	});
}

export default Component;
