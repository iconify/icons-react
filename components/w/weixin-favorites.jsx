import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upwa99b8d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upwa99b8d"/>`,
		"fallback": "icon-park-outline:weixin-favorites",
	});
}

export default Component;
