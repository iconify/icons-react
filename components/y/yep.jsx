import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evvbtj-xi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evvbtj-xi"/>`,
		"fallback": "icon-park-solid:yep",
	});
}

export default Component;
