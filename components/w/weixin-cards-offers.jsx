import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3cbd4b4a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3cbd4b4a"/>`,
		"fallback": "icon-park-outline:weixin-cards-offers",
	});
}

export default Component;
