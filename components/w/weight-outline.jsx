import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz5jy1b0j.css';
import '../../css/p/pcxysz9ao.css';
import '../../css/v/vwld5md-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gz5jy1b0j"/><path class="pcxysz9ao"/><path clip-rule="evenodd" class="vwld5md-z"/>`,
		"fallback": "cuida:weight-outline",
	});
}

export default Component;
