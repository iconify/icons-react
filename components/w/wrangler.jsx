import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yi269-bum.css';
import '../../css/r/rk3z2_bxe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yi269-bum"/><path class="rk3z2_bxe"/>`,
		"fallback": "material-icon-theme:wrangler",
	});
}

export default Component;
