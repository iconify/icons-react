import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxaoy2jxv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxaoy2jxv"/>`,
		"fallback": "icon-park-outline:windmill-two",
	});
}

export default Component;
