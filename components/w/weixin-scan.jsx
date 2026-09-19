import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ao01rhb3s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ao01rhb3s"/>`,
		"fallback": "icon-park-outline:weixin-scan",
	});
}

export default Component;
