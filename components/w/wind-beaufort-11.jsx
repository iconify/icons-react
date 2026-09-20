import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf5ad9bvn.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sf5ad9bvn"/>`,
		"fallback": "wi:wind-beaufort-11",
	});
}

export default Component;
