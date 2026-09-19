import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkv_76b3k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkv_76b3k"/>`,
		"fallback": "icon-park:women",
	});
}

export default Component;
