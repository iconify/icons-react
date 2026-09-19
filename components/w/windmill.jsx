import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6h2r6bje.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t6h2r6bje"/>`,
		"fallback": "icon-park-outline:windmill",
	});
}

export default Component;
